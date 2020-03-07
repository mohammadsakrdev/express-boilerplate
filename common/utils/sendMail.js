/* eslint-disable no-console */
const nodemailer = require('nodemailer');
const mandrillTransport = require('nodemailer-mandrill-transport');
const to = require('await-to-js').default;
const { promisify } = require('util');

const config = require('../config/config');

const transport = nodemailer.createTransport(
  mandrillTransport({
    auth: {
      apiKey: config.manDrill.apiKey
    }
  })
);

const sendMail = promisify(transport.sendMail);

/**
 * @function
 * Send mail via mail chimp
 *
 * @param {object} data
 * @param {string} data.message - The message  to be sent.
 * @param {string} data.name - The recipient  name.
 * @param {string} data.email - The email address to sent to.
 * @param {string} data.subject - The email subject.
 * @param {string} data.html - The email html.
 */
module.exports = async data => {
  const [err, result] = await to(
    sendMail({
      from: config.manDrill.fromMail,
      to: data.email,
      replyTo: config.manDrill.fromMail,
      subject: data.subject,
      text: data.message,
      html: data.html
    })
  );
  if (err) {
    throw new Error(err.message);
  }

  return result;
};
