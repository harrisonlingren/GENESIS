// Main scripting will go here [using ES6/babel]

//$(() => {
  // on document load

  let option1 = {id:0,text:"testOption0"};
  let option2 = {id:1,text:"testOption1"};
  let option3 = {id:2,text:"testOption2"};
  let o = [option1,option2,option3];

  function createButtons(options) {
    for (var i=0; i<options.length; i++) {
      var newButton = '<button class="btn btn-primary btn-lg option" id="optionButton'+i+'">'+options[i].text+'</button>';
      $('.button-container').append(newButton);
    }
  }

  $('.game-container').append('<div class="button-container"></div>');
  createButtons(o);
//});
