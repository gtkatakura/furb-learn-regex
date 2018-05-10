const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.get('mailer.email'),
    pass: config.get('mailer.password'),
  },
});

const options = {
  from: '"Learn REGEX" <gtk.learn.regex@example.com>',
};

const send = ({ to, subject, html }) => {
  const mail = Object.assign({}, options, { to, subject, html });

  return new Promise((resolve, reject) => transporter.sendMail(mail, (error, info) => {
    if (error) {
      reject(error);
    } else {
      resolve(info);
    }
  }));
};

export default { send };
