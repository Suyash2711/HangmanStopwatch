var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.querySelector(".startbutton");

var interval;

buttonStart.onclick = function(){
    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
}

function startTimer(){
    tens++;

    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 59){
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens=0;
        appendTens.innerHTML = "0" + 0;
    }
    if(seconds>9){
        appendSeconds.innerHTML = seconds;
    }
    buttonStart.disabled = true;
}

// ---------------------------STOPWATCH END----------------------------------------





var questions = ["What was the official name of the first World Cup?", " In first class Indian matches, the maximum distance (yards) allowed from pitch to the boundary/ line is ?", "Who was ‘the Man of the match’ in the 1983 World Cup final?", "The 1975 World Cup, the first of its kind was played at ?", "Who is the first batsman to cross 10000 runs in Tests ?"];
var answers = ["PRUDENTIAL", "75", "KAPIL DEV", "LORDS", "SUNIL GAVASKAR"];

var random = Math.floor(Math.random()*questions.length);

var selectedQ = questions[random];
var selectedA = answers[random];

var category = "Cricket";

var lives=5;
var totalMistakes = 5;

var space= [];

var wrong= [];

// document.getElementById("question").style.display = "none";
document.getElementById("question").innerHTML = selectedQ;
document.getElementById("category").innerHTML = category;

function show(){
    var element = document.getElementsByClassName(".startbutton");
    element.classList.add("show");
}

for(var i=0; i<selectedA.length; i++){  
    if(answers[random][i] == " "){
        space.push("/");
    }
    else{
        space.push("_");
    }
}


