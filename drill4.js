/*
Filename: Receipt display application
Program Name: script.js
Author: Rick Reinhard
Date: 7/27/17
*/

/* global $ */

//displays the next element after the current target
function display2(event){
    $(event.currentTarget).next().animate({height: 'toggle'}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked 
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
    $(this).css("background-color", "aqua");
    }, function(){
    $(this).css("background-color", "tan");
})

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);