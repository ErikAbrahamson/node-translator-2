$(document).ready(function() {
  console.log('loaded');
  $.ajax({
    url: '/api/token',
    method: 'GET',
    success: function(data) {
      console.log(data);
      console.log(token);
    },
    error: function(error) {
      return error.status;
    }
  });
});
