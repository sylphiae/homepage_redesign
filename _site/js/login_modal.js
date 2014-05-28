$(function() {
  $.get('https://auth.mayone.us/v1/current_user?return_to=https://mayone.us/homepage_redesign')  // TODO: template-ify the returnTo
  .fail(function() {
    $('#mysuperpac_topmenu').hide();
    $('#login_topmenu').hide();
    throw new Error('Error reaching auth server');
  })
  .done(function(authCreds) {
    if (authCreds.logged_in) {
      $('#mysuperpac_topmenu').show();
      $('#login_topmenu').hide();
      return;
    }


    // else, we need to login.  Show the buttons to toggle the modal
    $('#login_topmenu').show();
    $('#mysuperpac_topmenu').hide();


  });
});
