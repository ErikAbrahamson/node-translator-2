$(window).on('load',function() {
  console.log('loaded');
  $.ajax({
    url: '/api/token',
    method: 'GET',
    success: function(data) {
      token = data.token;
      console.log(token);
    },
    error: function(error) {
      return error.status;
    }
  });
});
function translate(word, langFrom, langTo) {
  $.ajax({
    url: 'http://api.microsofttranslator.com/V2/Ajax.svc/Translate',
    dataType: 'jsonp',
    data: {
      appId: 'Bearer ' + token,
      from: langFrom,
      to: langTo,
      contentType: 'text/plain',
      text: word
    },
    jsonp: 'oncomplete',
    success: function(data) {
      console.log(data);
    },
    error: function(error) {
      console.log(error.status);
    }
  });
}
