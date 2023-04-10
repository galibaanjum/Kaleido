var emilyScore = 0; // Stores the Emily Scores
var mikeScore = 0; // Stores the Mike Scores
var questionCount = 0;


var q1a1 = document.getElementById("tutoring");
var q1a2 = document.getElementById("mentoring");

var q2a1 = document.getElementById("<1day");
var q2a2 = document.getElementById("1week");
var q2a3 = document.getElementById(">1month");

var q3a1 = document.getElementById("hs");
var q3a2 = document.getElementById("college");

const type = document.getElementById("type");
const time = document.getElementById("time");
const age = document.getElementById("age");
const yass = document.getElementById("yass");

const result = document.getElementById("resultBox");
const resultText = document.getElementById("result");
const bio = document.getElementById("bio");
const image = document.getElementById("image");

function typeButton() {
  type.style.display = "none";
  time.style.display = "block";
  age.style.display = "none";
  result.style.display = "none";
  yass.style.display = "none";
};

function timeButton() {
  type.style.display = "none";
  time.style.display = "none";
  age.style.display = "block";
  result.style.display = "none";
};

function ageButton() {
  type.style.display = "none";
  time.style.display = "none";
  age.style.display = "none";
  result.style.display = "block";
};

q1a1.addEventListener("click", emily);
q1a2.addEventListener("click", mike);

q2a1.addEventListener("click", emily);
q2a2.addEventListener("click", mike);
q2a3.addEventListener("click", mike);

q3a1.addEventListener("click", mike);
q3a2.addEventListener("click", emily);

function mike() {
  mikeScore += 1;
  questionCount += 1;

  if (questionCount == 3) {
    updateResult();
  }
}

function emily() {
  emilyScore += 1;
  questionCount += 1;

  if (questionCount == 3) {
    updateResult();
  }
}

function updateResult() {
  if (emilyScore >= 2) {
    resultText.innerHTML = "Meet Your New H&C Fellow: Emily!";
    bio.innerHTML = "Hi! I'm Emily and I'm here to help you with anything you may need. I am available right now if you would like to connect. Or, you can visit my calendly to set up a meeting date for some time this week. Looking forward to 'seeing' you soon."; image.src = "https://i.pinimg.com/564x/c3/69/09/c36909363dc044793644923155bdcb25.jpg";
  }
  else if (mikeScore >= 2) {
    resultText.innerHTML = "Meet Your New H&C Fellow: Mike!";
    bio.innerHTML = "Hello! Hope everything's well. My name is Mike and I'm excited to assist you in your journey in managing whatever you need to manage. :) Email me or connect now for our first meeting so I can better assist you as long as you need. See you soon!"; 
    image.src = "https://products.shureweb.eu/shure_product_db/product_main_images/files/0fe/082/e6-/large/1b16a0366ec3308f6a9fe98908a2216d.jpeg";
  }
}