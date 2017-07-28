/*
Filename: Receipt display application
Program Name: script.js
Author: Rick Reinhard
Date: 7/27/17
*/

/* global $ */

//displays the next element after the current target
function display(event){
    $(event.currentTarget).next().fadeIn("slow");
}//end of display

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display);