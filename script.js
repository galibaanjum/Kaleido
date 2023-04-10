const targetDiv = document.getElementById("heart");
const btn = document.getElementById("heartButton");
const targetDivExplore = document.getElementById("explore");
const btnExplore = document.getElementById("exploreButton");
const targetDivDonate = document.getElementById("donate");
const btnDonate = document.getElementById("donateButton");
const targetDivSubmit = document.getElementById("submit");
const btnSubmit = document.getElementById("submitButton");

const name = document.getElementById('nameEnter');
const email = document.getElementById('emailEnter');
const number = document.getElementById('numberEnter');
const bio = document.getElementById('bioEnter');


btnSubmit.onclick = function () {
   targetDivSubmit.innerHTML = "Thank you for your donation! Have a wonderful day."; 
  name.value='';
  email.value='';
  number.value='';
  bio.value='';
}

btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
    targetDivExplore.style.display = "none";
    targetDivDonate.style.display = "none";
  }
};

btnExplore.onclick = function () {
  if (targetDivExplore.style.display !== "none") {
    targetDivExplore.style.display = "none";
  } else {
    targetDivExplore.style.display = "block";
    targetDiv.style.display = "none";
    targetDivDonate.style.display = "none";
  }
};

btnDonate.onclick = function () {
  if (targetDivDonate.style.display !== "none") {
    targetDivDonate.style.display = "none";
  } else {
    targetDivDonate.style.display = "block";
    targetDiv.style.display = "none";
    targetDivExplore.style.display = "none";
  }
};

// DONATE FORM
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}