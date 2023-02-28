const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const auth = require('./controllers/auth');
const messageResource = require('./controllers/messageResource');
const customer = require('./controllers/customer');
const workflow = require('./controllers/workflow');



const app = express();

const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:8081',
  'http://localhost:8082',
  'http://localhost:8090',
  'http://localhost:3000',
  'http://0.0.0.0:3000',
  'http://as-ess.surge.sh',
  'https://d2m7htnz6n3fxp.cloudfront.net',
  'http://d2m7htnz6n3fxp.cloudfront.net',
  'https://d10t4l0sbjyd6t.cloudfront.net',
  'http://d10t4l0sbjyd6t.cloudfront.net',
  'https://absencesoft-reactapp.com',
];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* eslint-disable no-console */
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'OPTIONS,DELETE,PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.header('Access-Control-Expose-Headers', 'Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.all('*', function (req, resp, next) {
  console.log(chalk.blue('Request Query:\n'));
  console.log(chalk.blue(JSON.stringify(req.query)));
  console.log(chalk.blue('Request Body:\n'));
  console.log(chalk.blue(JSON.stringify(req.body)));
  next();
});

app.use('/auth', auth);
app.use('/messageResource', messageResource);
app.use('/customers', customer);
app.use('/workflows', workflow);

module.exports = app;

///////////////////////////////////////////////////////
