$(document).ready(function(){

    var clientId = "561552492294-am9i3a2vu12bg49jsdoa9lmbak3j1onf.apps.googleusercontent.com";
    var redirect_uri = "http://localhost:63342/OAuth-Final-main/upload.html";
    var scope = "https://www.googleapis.com/auth/drive";
    var url = "";

    $('.header').height($(window).height());

    $("#login").click(function(){

        // this is the method which will be invoked it takes four parameters

        signIn(clientId,redirect_uri,scope,url);

    });

    function signIn(clientId,redirect_uri,scope,url){

        // the actual url to which the user is redirected to

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
            +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
            +"&access_type=offline";

        // this line makes the user redirected to the url

        window.location = url;
    }
});