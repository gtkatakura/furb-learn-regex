const { createServer } = require('./server');

const { app } = createServer(`${__dirname}/dist`);

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/dist/index.html`);
});
