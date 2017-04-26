// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here


    var heart=document.getElementById('heart');
    var answer=document.getElementById('answer');

    heart.addEventListener ('mouseover', function(){
      console.log('mouseover on heart');
      timer = setTimeout(showAnswer, 500);
    });

    heart.addEventListener ('mouseout', function(){
      console.log('mouseout on heart');
      clearTimeout(timer);
      answer.style.opacity = 0;
    });

    function showAnswer(){
      console.log('showing msg');
      answer.style.opacity = 1;
    }

});
