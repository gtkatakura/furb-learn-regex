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
}

export default WebApi;
