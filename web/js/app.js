// Main scripting will go here [using ES6/babel]

let story = $.getJSON('./story.json');

_.map(days, story['days']);

/*  schema for data:
      day objects:      story['days']
      header text:      story['days']['head'];
      question objecs:  story['days']['questions'];
      question prompts: story['days']['questions']['phrases'];
      question options: story['days']['questions']['options'];
      option responses: story['days']['questions']['options']['responses'] */

var choices = [];

function createButtons(options) {
  // if buttons exist, create them...
  if ( $('.option').length == 0 ) {

    for (var i=0; i<options.length; i++) {
      var newButton = '<button class="btn btn-lg option" id="optionButton'+i+'">'+options[i].text+'</button>';
      $('.btn-container').append(newButton);
    }
    $('#optionButton0').addClass('red');
    $('#optionButton1').addClass('green');
    $('#optionButton2').addClass('blue');

  // ...otherwise update them
  } else {

    .forEach($('.option'), (i, element) =>{
      element.html(options[i].text);
    });

  }
}


// REFACTOR: Not possible to wait for response using this technique...
function startGame() {
  var dayIndex = 0;
  do {
    // get questions for current day
    _.map(questions, days[dayIndex]['questions']);
    _.forEach(questions, (question) => {
      // get options for current question
      _.map(options, question['options']);

      // print question to prompt tag and update option buttons
      $(#prompt).html(question.phrase.toString());
      createButtons(options);
    });

    dayIndex++;
  } while (dayIndex < 6);
}





// ---------------------------------------------------------
// Animation & Events

var colorRed = '#9C3C1A';
var colorGreen = '#68B731';
var colorBlue = '#293AA8';
var currentColor = '#000000';

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
