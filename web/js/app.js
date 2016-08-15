// Main scripting will go here [using ES6/babel]

let option1 = {id:0,text:"testOption0"};
let option2 = {id:1,text:"testOption1"};
let option3 = {id:2,text:"This is some longer text so I can see what it will do in this situation...."};
let o = [option1,option2,option3];

var colorRed = '#9C3C1A';
var colorGreen = '#68B731';
var colorBlue = '#293AA8';
var currentColor = '#000000';

var choices = [];

function createButtons(options) {
  for (var i=0; i<options.length; i++) {
    var newButton = '<button class="btn btn-lg option" id="optionButton'+i+'">'+options[i].text+'</button>';
    $('.btn-container').append(newButton);
  }
}
createButtons(o);

function updateColors(c) {
  currentColor = $.xcolor.average(currentColor, c);
  $('.colorful').animate({
    backgroundColor: currentColor
  }, 500);
  console.log("Switched to color: " + currentColor);

  console.log(choices);
}

function record(selection) {
  choices.append(selection);
}

$('#optionButton0').click(() => {
  updateColors(colorRed);
  record(0);
});

$('#optionButton1').click(() => {
  updateColors(colorGreen);
  record(1);
});

$('#optionButton2').click(() => {
  updateColors(colorBlue);
  record(2);
});

$('.option').on('mouseenter', () => {

});

$('.option').on('mouseleave', () => {

});
