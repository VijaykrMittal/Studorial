var app = (function(win){
    "use strict";
    var onDeviceReady = function()
    {
       /* if(window.innerHeight>window.innerWidth)
        {
            console.log("portrait by resize");
             $('#drawer-list').css("width","400px");
        }
        else
        {
            console.log("landscape by resize");
            $('#drawer-list').css("width","600px");
        }*/
        
        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 4000);
    }
    
    document.addEventListener("deviceready",onDeviceReady,false);
    var apps = new kendo.mobile.Application(document.body,
                                                        {
                                                            skin:'flat',
                                                            initial:'views/home.html'
                                                        }
                                           );
    return{
        mobileApp:apps
    };
}(window));