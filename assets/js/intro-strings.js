var introStrings = [
  "inexcusable art",
  "light swearing",
  "semi-filtered goofballery",
  "randomized subtitle strings",
  "D&D",
  "self-exultation",
  "self-deprecation",
  "existential confusion",
  "occasional electronic music",
];

var introString = "Paul Ladd does things";
var lastIndexNumber = -1;

function chooseIntroString() {
    indexNumber = Math.floor((Math.random() * introStrings.length));
    introString = "Paul Ladd does " + introStrings[indexNumber];
    setIntroString(introString);
}

function setIntroString(text) {
    document.getElementById("intro-string").innerHTML = text;
}
