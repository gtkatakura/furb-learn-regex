import cookies from 'http/cookies';

class WebApi {
  constructor(route) {
    this.route = route;
  }

  fetch({ method, body }) {
    return fetch(this.route, {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': cookies.find('X-JWT-Token'),
      },
      body: body && JSON.stringify(body),
    });
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
