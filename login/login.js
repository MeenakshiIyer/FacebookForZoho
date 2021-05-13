var FB;
window.fbAsyncInit = function() {
    FB = FB;
    FB.init({
      appId      : '2985399068448492',
      cookie     : true,
      xfbml      : true,
      version    : 'v10.0'
    });
      
    FB.AppEvents.logPageView();  
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
   function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
    alert('hello');
    }
    FB.getLoginStatus();
    this.checkLoginState();
 
      
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
   
   
     