/*
    home view model
*/

var app = app || {};

app.home = (function(){
    "use strict";
    var homeViewModel = (function(){
        
        var show = function()
        {
            $(window).resize(function(){
                if(window.innerHeight>window.innerWidth)
                {
                    console.log("portrait by resize");
                   // $('#drawer-list').css("width","250px");
                }
                else
                {
                    console.log("landscape by resize");
                    //$('#drawer-list').css("width","320px");
                }

                //for hide the drawer when we change the device orientation
                $("#drawer-list").data("kendoMobileDrawer").hide();

                //for set the listview scrolling on top
                $('.km-scroll-container').css("-webkit-transform", "translate3d(0px, 0px, 0px)");
                $('.km-scroll-container').css("-ms-transform", "translate3d(0px, 0px, 0px)");
            }); 
        };
        
        return{
            show:show
        };
    }());
    
    return homeViewModel;
    
}());