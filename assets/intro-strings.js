var introStrings = [
    "art",
    "a blog",
    "a website",
    "bad words (sometimes)",
    "code",
    "comics",
    "D&D",
    "financial theory",
    "RPG stories",
    "SO MANY THINGS",
    "scripting",
    "things",
    "websites"];

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