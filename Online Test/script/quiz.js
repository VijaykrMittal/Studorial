/*
    quiz view model
*/

var app = app || {};

app.quiz = (function(){
    "use strict";
    
    //quiz model
    
    var quizModel = (function(){
        
        var datasource = new kendo.data.DataSource({
            transport:{
                read:{
                    url:'script/data/apptitude.json',
                    dataType:'json'
                    }
                }/*,
                group:{
                    field:'letter'
            }*/
        });
        
        return{
            quizData:datasource
        };
    }());
    
    //quiz view model
    var quizViewModel = (function(){
        
        var quizStartRequest = function(e)
        {
            var data = $(e.target).data();
            console.log(data);
            
            navigator.notification.confirm("<ul><li>OKKKKKK</li></ul>Each question carry 1 mark, no negative marks.\n Test will be submitted automatically if the time expired.\n Click the 'Submit Test' button given in the bottom of this page to Submit your answers. ",function(confirm){
                if(confirm === true || confirm === 1)
                {
                    alert("Start");
                    alert(data.id);
                }
            },"Do you want to start a Test","Start,Cancel");
        };
        
        
        return{
            quizSource:quizModel.quizData,
            quizStartRequest:quizStartRequest
        };
    }());
    
    return quizViewModel;
}());