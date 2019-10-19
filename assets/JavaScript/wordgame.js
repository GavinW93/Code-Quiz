
//make texts hidden
document.getElementById("ans1").style.visibility = "hidden";
document.getElementById("ans2").style.visibility = "hidden";
document.getElementById("ans3").style.visibility = "hidden";
document.getElementById("ans4").style.visibility = "hidden";
document.getElementById("initials").style.visibility = "hidden";
document.getElementById("saveBtn").style.visibility = "hidden";
//document.getElementsByClassName("saveBtn").style.visibility = "hidden";

var HighScore= 0;
document.getElementById('time').innerHTML = "press the start button";
$("#start").on("click", function() {

  startingGame();
  startingTime();
  
  
});
    function startingTime(){
    
      
      
    // var timerDown= "time:"
      document.getElementById('time').innerHTML = "time: ";
      document.getElementById('highscoreTXT').innerHTML = "High Score: ";
      document.getElementById('score').innerHTML = HighScore;
      document.getElementById("ans1").style.visibility = "visible";
      document.getElementById("ans2").style.visibility = "visible";
      document.getElementById("ans3").style.visibility = "visible";
      document.getElementById("ans4").style.visibility = "visible";

      var seconds = 15, $seconds = document.querySelector('#countdown');

      (function countdown() {
          $seconds.textContent = seconds + ' second' + (seconds == 1 ?  '' :  's')
          if(seconds --> 0) setTimeout(countdown, 1000)
      })();

    }
    function startingGame(){
      var stb = document.getElementById("start");
      if (stb.style.display === "none") {
        stb.style.display = "block";
      } else {
        stb.style.display = "none";
      }
      alert("start game")
      
                document.getElementById('score').innerHTML = HighScore; 
                document.getElementById('results').innerHTML = "";
                document.getElementById('questions').innerHTML = "commonly used data types DO NOT include: ";
                document.getElementById('ans1').innerHTML = "string ";
                document.getElementById('ans2').innerHTML = "booleans ";
                document.getElementById('ans3').innerHTML = "alerts ";
                document.getElementById('ans4').innerHTML = "numbers ";

                          $("#ans1").on("click", function() {
                            //alert("wrong");
                            document.getElementById('results').innerHTML = "wrong ";
                            question2();
                            //seconds= seconds - 15;
                            //startingTime();
                          })
                          $("#ans2").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question2();
                            //seconds= seconds - 15;
                            //startingTime();
                          })
                          $("#ans3").on("click", function() {
                                
                            document.getElementById('results').innerHTML = "correct ";
                            question2();
                            HighScore = HighScore + 120;
                            document.getElementById('score').innerHTML = HighScore; 
                            //startingTime();      
                          })
                          $("#ans4").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question2();
                            //startingTime();
                            //seconds= seconds - 15;
                          })


    }

    function question2(){
    //  alert("start game")
    //seconds = 15, $seconds = document.querySelector('#countdown');
                document.getElementById('score').innerHTML = HighScore; 
                document.getElementById('questions').innerHTML = "The condition in an if / else statement is enclosed within ____.";
                document.getElementById('ans1').innerHTML = "quotes ";
                document.getElementById('ans2').innerHTML = "curly brackets ";
                document.getElementById('ans3').innerHTML = "parentheses ";
                document.getElementById('ans4').innerHTML = "square brackets ";

                          $("#ans1").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question3();
                            //startingTime();
                          // seconds= seconds - 15;
                          })
                          $("#ans2").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question3();
                            //startingTime();
                          // seconds= seconds - 15;
                          })
                          $("#ans3").on("click", function() {
                                
                            document.getElementById('results').innerHTML = "correct ";
                            question3();
                            //startingTime();
                            HighScore = HighScore + 120;
                            document.getElementById('score').innerHTML = HighScore;       
                          })
                          $("#ans4").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question3();
                            //startingTime();
                            //seconds= seconds - 15;
                          })


    }
    function question3(){
      //alert("start game")

                document.getElementById('score').innerHTML = HighScore; 
                document.getElementById('questions').innerHTML = "Arrays in JavaScript can be used to store ________";
                document.getElementById('ans1').innerHTML = "numbers and strings ";
                document.getElementById('ans2').innerHTML = "other arrays ";
                document.getElementById('ans3').innerHTML = "booleans ";
                document.getElementById('ans4').innerHTML = "all of the above ";

                          $("#ans1").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question4();
                            //startingTime();
                          // seconds= seconds - 15;
                          })
                          $("#ans2").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question4();
                            //startingTime();
                            //seconds= seconds - 15;
                          })
                          
                          $("#ans3").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question4();
                            //startingTime();
                            //seconds= seconds - 15;
                          })
                          $("#ans4").on("click", function() {
                                
                            document.getElementById('results').innerHTML = "correct ";
                            question4();
                            //startingTime();
                            HighScore = HighScore + 120;
                                  
                          })



    }

    function question4(){
      //alert("start game")
      
                document.getElementById('score').innerHTML = HighScore; 
                document.getElementById('questions').innerHTML = "string values must be enclosed within ________ when being assigned to variables.";
                document.getElementById('ans1').innerHTML = "commas ";
                document.getElementById('ans2').innerHTML = "curly brackets ";
                document.getElementById('ans3').innerHTML = "quotes ";
                document.getElementById('ans4').innerHTML = "parentheses ";

                          $("#ans1").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question5();
                            //startingTime();
                          // seconds= seconds - 15;
                          })
                          $("#ans2").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question5();
                            //startingTime();
                            //seconds= seconds - 15;
                          })
                          
                          $("#ans4").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            question5();
                            //startingTime();
                            //seconds= seconds - 15;
                          })
                          $("#ans3").on("click", function() {
                                
                            document.getElementById('results').innerHTML = "correct ";
                            question5();
                            //startingTime();
                            HighScore = HighScore + 120;
                                  
                          })
                          


    }
    function question5()
    {
    
      //alert("start game")
                document.getElementById('score').innerHTML = HighScore; 
                document.getElementById('questions').innerHTML = "A very useful tool used during development and debuging for printing content to the debugger is";
                document.getElementById('ans1').innerHTML = "JavaScript ";
                document.getElementById('ans2').innerHTML = "terminal/bash ";
                document.getElementById('ans3').innerHTML = "for loops ";
                document.getElementById('ans4').innerHTML = "console.log ";

                          $("#ans1").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            finalresults();
                            //startingTime();
                          // seconds= seconds - 15;
                          })
                          $("#ans2").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            finalresults();
                            //seconds= seconds - 15;
                          })
                          
                          $("#ans3").on("click", function() {
                            document.getElementById('results').innerHTML = "wrong ";
                            finalresults();
                           // startingTime();
                            //seconds= seconds - 15;
                          })
                          $("#ans4").on("click", function() {
                                
                            document.getElementById('results').innerHTML = "correct ";
                            finalresults();
                            //startingTime();
                            HighScore = HighScore + 120;
                            document.getElementById('score').innerHTML = HighScore;       
                          })
                          


    }
      function finalresults()
        {

          alert("your final score is" + HighScore);
          //document.getElementById('result').innerHTML = "your final score is" + HighScore; 
         //make texts hidden again
          document.getElementById("ans1").style.visibility = "hidden";
          document.getElementById("ans2").style.visibility = "hidden";
          document.getElementById("ans3").style.visibility = "hidden";
          document.getElementById("ans4").style.visibility = "hidden";   
          document.getElementById("initials").style.visibility = "visible"; 
          document.getElementById("saveBtn").style.visibility = "visible";
          document.getElementById('questions').innerHTML = "please enter your initials for the high score!";


   /*  var x = localStorage.getItem('init'); 
    var input = document.getElementById('initials').value;
    localStorage.setItem('init', input);
    document.getElementById('initials').value = localStorage.getItem('init');
    //var x = localStorage["server"];
    //document.getElementById("cacn").innerHTML = x;



    var saveScore = localStorage.getItem('scoring');
    var scoreInput = document.getElementById('score').value;
    localStorage.setItem('scoring', scoreInput);
    document.getElementById('score').value = localStorage.getItem('scoring');
 */

        }
function saveData()
{
  //save the intials
  var init = document.getElementById('initials').value;
localStorage.setItem("PInitials", init);
// save the score count
//var scor= HighScore
localStorage.setItem("Hscore", HighScore);

  var x = document.createElement("P");
  var t = document.createTextNode((init)+":"+(HighScore));
  x.appendChild(t);
  document.body.appendChild(x);

  //document.getElementById('initials').value = localStorage.getItem('PInitials');

}