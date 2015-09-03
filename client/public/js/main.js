var token;
var random;
var tempArray = [];
$(window).on('load',function() {
  console.log('loaded');
  getToken();
  randomWord();
});

function randomWord() {
  $.ajax({
    url: '/api/random',
    method: 'GET',
  }).done(function(data) {
    random = data.random;
  }).fail(function(error) {
    console.log(error.status);
  });
}

function translate(word, langTo) {
  $.ajax({
    url: 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate',
    dataType: 'jsonp',
    data: {
      appId: 'Bearer ' + token,
      from: getLanguage(word),
      to: langTo,
      contentType: 'text/plain',
      text: word
    },
    jsonp: 'oncomplete',
  }).done(function(data){
    console.log(data);
    tempArray.push(data);
  }).fail(function(error) {
    getToken();
  });
}

function getLanguage(string) {
  $.ajax({
    url: 'http://api.microsofttranslator.com/V2/Ajax.svc/Detect',
    method: 'GET',
    data: {
      appId: 'Bearer ' + token,
      text: string
    }
  }).done(function(data) {
    return data;
  }).fail(function(error) {
    return error.status;
  });
}

function getToken() {
  $.ajax({
    url: '/api/token',
    method: 'GET',
    success: function(data) {
      token = data.token;
    },
    error: function(error) {
      return error.status;
    }
  });
}

function compare(userWord, correctWord) {
  if (userWord === correctWord) {
    console.log('Correct!');
    // push correct++
  } else {
    console.log('Incorrect');
    // push incorect++
  }
}
