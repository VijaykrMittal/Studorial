/*
    drawer view model
*/

var app = app || {};

app.drawer = (function(){
    "use strict";
    
    var drawerViewModel = (function(){
        
        var clickme = function()
        {
          alert("click");  
        };
        
        return{
            clickme:clickme
        }
    }());
    
    return drawerViewModel;
}());