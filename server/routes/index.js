var express = require('express');
var router = express.Router();
var ajax = require('najax');
var http = require('http');

var request = {
  url: 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13',
  type: 'POST',
  header: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  data: {
    grant_type: 'client_credentials',
    client_id: 'galvanize',
    client_secret: process.env.client_secret,
    scope: 'http://api.microsofttranslator.com'
  },
  success: function(data) {
    console.log(data);
    router.get('/', function(req, res, next) {
      res.render(data);
    });
  },
  error: function(error) {
    console.log('Error: ' + error.status);
  }
};

ajax(request);

module.exports = router;
