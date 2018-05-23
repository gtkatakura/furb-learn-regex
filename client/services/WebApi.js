import HttpStatus from 'http-status-codes';
import cookies from 'http/cookies';

class WebApi {
  constructor(route) {
    this.route = route;
  }

  withRoute(url) {
    return new WebApi(`${this.route}/${url}`);
  }

  async fetch({ method, body, queryString }) {
    const query = Object.keys(queryString || {})
      .filter(k => queryString[k])
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(queryString[k])}`)
      .join('&');

    const response = await fetch(`${this.route}${query ? '?' + query : ''}`, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': cookies.find('X-JWT-Token'),
      },
      body: body && JSON.stringify(body),
      qs: queryString,
    });

    if (response.status === HttpStatus.NOT_ACCEPTABLE) {
      throw await response.json();
    }

    return response;
  }

  async all(queryString) {
    const response = await this.fetch({ method: 'GET', queryString });
    return response.json();
  }

  create(body) {
    return this.fetch({ method: 'POST', body });
  }

  update(body) {
    return this.fetch({ method: 'PUT', body });
  }

  delete() {
    return this.fetch({ method: 'DELETE' });
  }
}

export default WebApi;
