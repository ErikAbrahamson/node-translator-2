var express = require('express');
var router = express.Router();
var ajax = require('najax');

var request = {
  url: 'https://datamarket.accesscontrol.windows.net/v2/OAuth2-13',
  method: 'POST',
  contentType: 'application/x-www-form-urlencoded',
  data: {
    client_id: 'galvanize',
    client_secret: process.env.client_secret,
    grant_type: 'client_credentials',
    scope: 'http://api.microsofttranslator.com/'
  },
  success: function(data) {
    data = JSON.parse(data);
    var token = data.access_token;
    router.get('/api/token', function(req, res, next) {
      res.json({
        token: token
      });
    });
  },
  error: function(error) {
    console.log('Error: ' + error.status);
  }
};

ajax(request);

router.get('/', function(req, res) {
  res.render('index', {
    title: 'Node Translator'
  });
});

module.exports = router;
