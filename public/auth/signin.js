  // function statusChangeCallback(response) {
  //   console.log('statusChangeCallback');
  //   console.log(response);
  //   // The response object is returned with a status field that lets the
  //   // app know the current login status of the person.
  //   // Full docs on the response object can be found in the documentation
  //   // for FB.getLoginStatus().
    


  //   if (response.status === 'connected') {
  //     window.location = "http://localhost:1337/#"
  //   }
  //   else{
      
  //   }
  // }

  // // This function is called when someone finishes with the Login
  // // Button.  See the onlogin handler attached to it in the sample
  // // code below.

  // function checkLoginState() {
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });
  // }

  // window.fbAsyncInit = function() {
  //   FB.init({
  //     appId      : '1654239444895169',
  //     cookie     : true,  // enable cookies to allow the server to access 
  //                         // the session
  //     xfbml      : true,  // parse social plugins on this page
  //     version    : 'v2.5' // use graph api version 2.5
  //   });

  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });

  // };


  // // Load the SDK asynchronously
  // (function(d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0];
  //   if (d.getElementById(id)) return;
  //   js = d.createElement(s); js.id = id;
  //   js.src = "https://connect.facebook.net/en_US/sdk.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  // }(document, 'script', 'facebook-jssdk'));

