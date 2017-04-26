// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here


    var about=document.getElementById('about');
    var conact=document.getElementById('contact');
    var mywork=document.getElementById('mywork');
    var megan=document.getElementById('megan');

    about.addEventListener ('mouseover', function() {
      about.style.size='200px';
    });

});
