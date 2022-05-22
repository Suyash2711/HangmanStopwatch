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
    // show();
}

// ---------------------------STOPWATCH END----------------------------------------





var questions = ["What was the official name of the first World Cup?", " In first class Indian matches, the maximum distance (yards) allowed from pitch to the boundary/ line is ?", "Who was ‘the Man of the match’ in the 1983 World Cup final?", "The 1975 World Cup, the first of its kind was played at ?", "Who is the first batsman to cross 10000 runs in Tests ?"];
var answers = ["PRUDENTIAL", "75", "KAPIL DEV", "LORDS", "SUNIL GAVASKAR"];

var random = Math.floor(Math.random()*questions.length);

// var key = 

var selectedQ = questions[random];
var selectedA = answers[random];

var category = "Cricket";

var lives=5;
var totalMistakes = 5;

var correct= [];

var wrong= [];

// document.getElementById("question").style.display = "none";
document.getElementById("question").innerHTML = selectedQ;
document.getElementById("category").innerHTML = category;
var ans = document.querySelector(".answer");
var correct_ans = [];


// function show(){
//     // var element = document.getElementsByClassName(".startbutton");
//     // element.classList.add("show");

    
// }
var space = [];
for(var i=0; i<selectedA.length; i++){
    correct_ans.push(selectedA[i]);
}
console.log(correct_ans);
// ans.innerHTML = correct_ans;

for(var i=0; i<selectedA.length; i++){
    if(correct_ans[i] == ' '){
        space.push("/");
    }
    else{
        space.push("_");
    }
    space.join(" ");
}
console.log(space);
ans.innerHTML = space.join(" ");

for(var i=0; i<selectedA.length; i++){  
    if(answers[random][i] == " "){
        correct.push("/");
    }
    else{
        correct.push(selectedA[i]);
    }
}
console.log(correct); //answer in correct


