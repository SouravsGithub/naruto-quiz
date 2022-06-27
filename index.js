var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name? ");

var score = 0;

console.log("Welcome " + userName + " to Naruto cutter fan. ");
console.log("If you can answer all the upcoming questions, then you are a Naruto cutter fan.");


var characterAnswers = [
  question1 = {
    question: "What is Naruto's full name? ",
    answer: "Naruto Uzumaki"
  },
  question2 = {
    question: "Who was the teacher of Naruto? ",
    answer: "Kakashi Hatake"
  },
  question3 = {
    question: "Who was the girlfriend of Naruto?",
    answer: "Hinata Hyuga"
  },
  question4 = {
    question: "Naruto is the _____ hokage? ",
    answer: "7th"
  },
  question5 = {
    question: "What is the name of Naruto's daughter? ",
    answer: "Himawari"
  }
]

  var arr = [
  ["Naruto Uzumaki", "Naruto Uchhiha", "Naruto Sahoo", "Naruto Hyuga"],
  ["Tobirama Senju", "Minato Namikaze", "Hashirama Senju", "Kakashi Hatake"],
  ["Sakura Haruno", "Hinata Hyuga", "Kushina Uzumaki"],
  ["5th", "6th", "7th", "8th"],
  ["Hinawari", "Sarada", "Himawari", "Nezuko"]
  ]
var count = 0;

function play(question, answer) {
  var options = arr[count];
  var index = readlineSync.keyInSelect(options, question);
  var userAnswer = options[index];
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yes, You are right!");
    score += 10;
  } else {
    console.log("No, you are wrong!");
  }

  console.log("current score is " + score);
  console.log("--------------");
}

for (var i = 0; i < characterAnswers.length; i++) {
  var currentQuestion = characterAnswers[i];
  play(currentQuestion.question, currentQuestion.answer);
  count++;
}

if (score > 30) {
  console.log("You scored " + score + " out of 50");
  console.log("Damn bro, You are a cutter fan!");
} else {
  console.log("Noob! You are just a piece of shit.");
}