function load() {
  populateLineNumbers();
  generateChromaflair();
}

function populateLineNumbers() {
  var container = document.getElementsByClassName("line-numbers")[0];
  var numbers = "";
  for(i=1; i<=100; i++) {
    numbers += i + " ";
  }
  container.innerHTML = numbers;
}

function generateChromaflair() {
  var chromaflairColours = [
    "#ff355e",
    "#fd5b78",
    "#ff6037",
    "#ff9966",
    "#ff9933",
    "#ffcc33",
    "#ffff66",
    "#ffff66",
    "#ccff00",
    "#66ff66",
    "#aaf0d1",
    "#50bfe6",
    "#ff6eff",
    "#ee34d2",
    "#ff00cc",
    "#ff3855",
    "#fd3a4a",
    "#fb4d46",
    "#fa5b3d",
    "#a7f432",
    "#299617",
    "#9c51b6"
  ];

  var fromColour = chromaflairColours[getRandomInt(chromaflairColours.length-1)];
  var toColour = chromaflairColours[getRandomInt(chromaflairColours.length-1)];

  console.log(fromColour);
  console.log(toColour);

  var gradient = "linear-gradient(to right, " + fromColour + "," + toColour + ")";
  var chromaflair = document.getElementById("chromaflair");
  chromaflair.style.backgroundImage = "-o-" + gradient;
  chromaflair.style.backgroundImage = "-webkit-" + gradient;
  chromaflair.style.backgroundImage = "-moz-" + gradient;
  chromaflair.style.backgroundImage = "-ms-" + gradient;
  chromaflair.style.backgroundImage = gradient;

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}