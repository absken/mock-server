const express = require('express');

const { conf } = require('../config/config');
const { getJsonFromFile } = require('../utils');

const router = express.Router();

//routes
router.post('/authenticate', authenticate);
router.get('/extend-session', extendSession);

function authenticate(req, res) {
  res.setHeader('Authorization', `${conf.auth.xJwtToken}`);
  setTimeout(() => {
    if (req.body && ((req.body.username === 'admin' && req.body.password === 'admin') || (req.body.username === 'qa@absencesoft.com' && req.body.password === '!Complex001') {
      res.json({
        status: 'success',
        message: '',
        data: getJsonFromFile('./data/authenticate.json'),
      });
    } else {
      res.json({
        status: 'error',
        message: 'Oops! Your username or password is invalid.',
        data: getJsonFromFile('./data/authenticate.json'),
      });
    }
  }, 2000);
}

function extendSession(req, res) {
  res.setHeader('Authorization', `${conf.auth.xJwtToken}`);
  setTimeout(() => {
    res.json({
      status: 'success',
      message: '',
    });
  }, 2000);
}

module.exports = router;
