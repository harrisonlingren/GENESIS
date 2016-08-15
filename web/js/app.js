// Main scripting will go here [using ES6/babel]

var story = {};

let xmlhttp = new XMLHttpRequest();
let url = 'js/story.json';
xmlhttp.onreadystatechange = () => {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    story = JSON.parse(xmlhttp.responseText);
    console.log("Successfully loaded story data: " + xmlhttp.status);
    console.log(story);

    // map data
    for (var i=0; i<story.days.length; i++) {
      console.log('DAY '+(i+1)+': '+story.days[i].head)
      for (var n=0; n<story.days[i].questions.length; n++) {
        console.log('  Question #'+n+': '+story.days[i].questions[n].phrase);
        for (var o=0; o<story.days[i].questions[n].options.length; o++) {
          console.log('      Option #'+o+': '+story.days[i].questions[n].options[o].text);
        }
        //console.log(story.days[n].questions.options.responses)
      }
    }

  } else {
    console.log("Could not GET story data: " + xmlhttp.status);
    story = {};
  }
}

xmlhttp.open('GET', url, true);
xmlhttp.send();

var days = [];



/*  schema for data:
      day objects:      story.days
      header text:      story.days[n].head;
      question objecs:  story.days[n].questions;
      question prompts: story.days[n].questions.phrases;
      question options: story.days[n].questions.options;
      option responses: story.days[n].questions.options.responses */

var choices = [];

function updateText(options) {
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

    _.forEach($('.option'), (i, element) => {
      element.html(options[i].text);
    });

  }

  $('#prompt').html(/*  */)

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
      $('#prompt').html(question.phrase.toString());
      updateText(options);
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
