function checkLoginState() {
  FB.getLoginStatus(function(response) {
    console.log("blah");
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed');
  console.log(response);
  
  if (response.status === 'connected') {
    FB.api('/me?fields=name, first_name, picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  $('.facebookLogin').hide();
  console.log(response);
  console.log(response.picture.data.url);
  $('h1#name').text(response.name);
  $('#photo').attr('src', response.picture.data.url);
}
