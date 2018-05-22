import HttpStatus from 'http-status-codes';
import cookies from 'http/cookies';

class WebApi {
  constructor(route) {
    this.route = route;
  }

  withRoute(url) {
    return new WebApi(`${this.route}/${url}`);
  }

  async fetch({ method, body }) {
    const response = await fetch(this.route, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': cookies.find('X-JWT-Token'),
      },
      body: body && JSON.stringify(body),
    });

    if (response.status === HttpStatus.NOT_ACCEPTABLE) {
      throw await response.json();
    }

    return response;
  }

  async all() {
    const response = await this.fetch({ method: 'GET' });
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
