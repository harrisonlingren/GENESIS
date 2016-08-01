#!/usr/bin/env node
var fs = require("fs");

function print(a) {
  console.log(a);
}

function input(a) {
  print(a);
  var stdin = process.openStdin();
  stdin.addListener("data", function(d) {
      return d.toString().trim();
  });
}

function calcResult(a) {
  var numOnes = 0;
  var numTwos = 0;
  var numThrees = 0;
  total = a.length;

  for (i=0; i<total; i++) {
    if (a[i] == 1) {numOnes++;}
    else if (a[i] == 2) {numTwos++;}
    else if (a[i] == 3) {numThrees++;}
    else {print("[Err] No match found for: " + a[i].toString());}
  }

  var percentages = [(numOnes/total), (numTwos/total), (numThrees/total)];
  result = "Result:  " + (percentages[0]*100) + "% aggressive, " + (percentages[1]*100) + "% peaceful, " + percentages[2] + "% neutral.";
  return result;
}

function run() {
  var story = JSON.parse('{"days":[{"head":"IN THE BEGINNING","questions":[{"phrase":"You created the heaven and the earth. Now the earth was formless and empty, darkness was over the spirit of the deep, and the spirit of you was hovering over it.","options":[{"text":"Fire"},{"text":"Water"},{"text":"Light"}],"response":"And You said \"let there be {0}.\" You saw the {0} was good."}],"foot":"And there was evening and there was morning."},{"head":"THE SECOND DAY","questions":[{"phrase":"You recognized the trinity of body, mind, and soul.","options":[{"text":"Body"},{"text":"Mind"},{"text":"Soul"}],"response":"You saw that the {0} was good. And You separated the body from the mind and the mind from the soul."},{"phrase":"You saw the heavens and the earth and the hells.","options":[{"text":"Heaven"},{"text":"Earth"},{"text":"Hell"}],"response":"And You separated the heavens from the earth, and the hells from them both, and it was good."}],"foot":"And there was evening and there was morning."},{"head":"THE THIRD DAY","questions":[{"phrase":"Then You said,","options":[{"text":"Let the land burn hot and barren."},{"text":"Let the land produce vegetation that bear fruit with seed in it."},{"text":"Let the land be lush."}],"response":""},{"phrase":"And You said,","options":[{"text":"Let the land teem with living creatures, and let the creatures be aggressive and territorial."},{"text":"Let the land teem with living creatures, and let the creatures be timid and mild."},{"text":"Let the land teem with living creatures, and let the creatures be wild and free."}],"response":""},{"phrase":"Then You said \"Let Us make mankind in Our image, so that they may rule over the creatures of the earth.\"","options":[{"text":"Mankind is born of flame."},{"text":"Mankind is born of the ground."},{"text":"Mankind is born of music."}],"response":""}],"foot":"And there was evening and there was morning."},{"head":"THE FOURTH DAY","questions":[{"phrase":"Mankind wishes to know its creator.","options":[{"text":"Show them Your power."},{"text":"Show them Your kindness."},{"text":"Test their faith."}],"response":""},{"phrase":"You give mankind the gift of knowledge.","options":[{"text":"Knowledge of War","outcome":["You gift them the spear.","You gift them the shield.","You gift them the hero’s story."]},{"text":"Knowledge of Abundance","outcome":["You gift them forced labor.","You gift them agriculture.","You gift them ingenuity."]},{"text":"Knowledge of Beauty","outcome":["You gift them venationes.","You gift them feast.","You gift them art."]}],"response":""},{"phrase":"Man meets the creatures of the earth and looks to You for guidance.","options":[{"text":"Treat them with aggression","outcome":["Man collects trophies in his dominance over the land.","Man appreciates the creature who feeds and clothes him.","Man presents You with sacrifice."]},{"text":"Treat them with kindness","outcome":["Man appreciates the creature who feeds and clothes him.","Man coexists with the creatures of the land.","Man worships the creatures around him."]},{"text":"Treat them with ambivalence","outcome":["Man exiles all creatures from his land.","Man leads all creatures from his land.","Man constructs a wall to separate himself from all creatures."]}],"response":""},[{"phrase":"Creation becomes a ground for violence. Man kills man.","options":[{"text":"You are pleased by mankind’s strength","outcome":["You revel in the destruction of the weak.","You provide protection for the weak.","You enjoy the warring trumpet sounds."]},{"text":"You wish to subdue mankind","outcome":["Festering boils break out among Your people throughout the land.","You reveal yourself to Your followers, bringing a message of peace.","You make a grandiose show of power, they are awestruck."]},{"text":"You ignore the violence"}],"response":""},{"phrase":"Your people are dissatisfied with the earth that has been created.","options":[{"text":"Cull humanity","outcome":["A deadly plague strikes mankind.","The elect ascend to heaven.","You purge mankind."]},{"text":"Lead man to a new promised land","outcome":["Mankind is met with a barren land","The promised land serves all mankind","Man erects a temple in Your honor"]},{"text":"Tell Your followers to mark their doors with blood","outcome":["Judgement strikes down the firstborn of those who failed to heed your warning.","Those who have heard You are blessed.","The elders are judged, and spend eternity in the afterlife created for them."]}],"response":""},{"phrase":"Mankind grows too fast and the earth cannot sustain their presence.","options":[{"text":"Torch the earth","outcome":["You destroy everything that mankind finds displeasing."]},{"text":"Teach mankind to appreciate all creation","outcome":["You teach mankind to appreciate Your creation."]},{"text":"Create anew","outcome":["You cause new creations that please mankind."]}],"response":""}]],"foot":"And there was evening and there was morning."},{"head":"THE FIFTH DAY","questions":[{"phrase":"Mankind separates into two tribes. Those who believe and those who deny.","options":[{"text":"Favor Your disciples."},{"text":"Favor the gentiles, in hopes to guide them along the righteous path."},{"text":"Favor no one."}],"response":""},{"phrase":"The smallest tribe is persecuted. Drawn out and killed.","options":[{"text":"Smite the unbelievers."},{"text":"Protect the weak."},{"text":"Let mankind bicker and quarrel."}],"response":""},{"phrase":"Your people beg for rain from the heavens.","options":[{"text":"Let the earth smolder.","outcome":["You spread wildfire to punish their insolence"]},{"text":"Provide Your people with what they ask for.","outcome":["It rains for forty days and forty nights, flooding the earth."]},{"text":"Believe in Your people as they believe in You.","outcome":["Droughts spread throughout the earth."]}],"response":""},{"phrase":"The earthwide disaster ravages mankind.","options":[{"text":"Defend your followers."},{"text":"Defend all of mankind."},{"text":"Let the disaster consume the unpleasing parts of the earth."}],"response":""},{"phrase":"A false prophet rises, spreading word of a message that is not Yours.","options":[{"text":"Thwart the efforts of the false prophet."},{"text":"Allow mankind to disbelieve."},{"text":"Bless the world with Your powers. Inspire awe in Your truth."}],"response":""}],"foot":"And there was evening and there was morning."},{"head":"THE SIXTH DAY","questions":[{"phrase":"You send a prophet to","options":[{"text":"Wage a holy war in Your name"},{"text":"Bring Your teachings of peace to all corners of earth"},{"text":"To preach the praises of Your glory"}],"response":""},{"phrase":"Mankind kills Your prophet.","options":[{"text":"You react in fury against mankind and punish them for their sin."},{"text":"You forgive mankind for its flaws"},{"text":"You make a spectacle of your martyr. A symbol that mankind will never forget."}],"response":""},{"phrase":"Mankind begins worshipping false idols","options":[{"text":"Dissension arises among the false worshippers."},{"text":"--NOT HERE YET--"},{"text":"--NOT HERE YET--"}],"response":"The End is nigh"},{"phrase":"The Choice is here","options":[{"text":"Abandon Earth","outcome":["Earth burns in your wake","Earth withers without your nourishment","Earth decays in its inherent disfigurement"]},{"text":"Join humanity on earth as a mortal","outcome":["--NOT HERE YET--","--NOT HERE YET--","--NOT HERE YET--"]},{"text":"Maintain your rule over creation","outcome":["--NOT HERE YET--","--NOT HERE YET--","--NOT HERE YET--"]}],"response":""}],"foot":"--NOT HERE YET--? Darkness fills You..."}]}');
  var jsonFile = fs.readFile("./story.json", "utf8", function(err, data) {
    if (err) {throw err;}
    story = JSON.parse(data);
  });
  story = JSON.parse(jsonFile);
  print(jsonFile);

  var choices = [];
  var days = story['days'];

  //print(story);
  //print(days);

  for (i=0; i<days.length; i++) {
    var day = days[i];
    header = day.head;
    print('\n\n' + header + '...\n---------------------------------------');

    questions = day.questions;
    for (j=0; i<questions.length; j++) {
      var question = questions[i];
      if (typeof question === 'string' || question instanceof String) {
        print(question.phrase);
        var dayOptions = question.options;
      } else {
        so = choice - 1;
        print(question[so].phrase);
        var dayOptions = question[so].options;
      }

      print('Options:');
      print('  1: ' + dayOptions[0].text + '\n  2: ' + dayOptions[1].text + '\n  3: ' + dayOptions[2].text);
      var choice = parseInt(input('> '));
      choices.push(choice);
      print('[Info]  Updated choice array: ' + choices.toString());
    }

    print('\n' + day.foot);
  }

  print('\n\nCalculating result...');
  print(calcResult(choices));

  //choices = [1,2,3,4,3,1,2,3,6,3,1,2,3,1,3];
  print(calcResult(choices));
}

run();
