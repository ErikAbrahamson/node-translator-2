var express = require('express');
var router = express.Router();
var ajax = require('najax');
var http = require('http');
require('dotenv').load();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node Translator' });
});

var request = {
  url: 'https://login.microsoftonline.com/common/oauth2/authorize',
  type: 'POST',
  data: {
    grant_type: 'client_credentials',
    client_id: 'galvanize',
    client_secret: process.env.client_secret,
    scope: 'http://api.microsofttranslator.com'
  },
  success: function(data) {
    console.log(data);
    // grabs access_token
  },
  error: function(error) {
    console.log('Error: ' + error.status);
  }
};

ajax(request);

module.exports = router;
