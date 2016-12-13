//What the user wrote in the text input field
var weight = document.getElementById("userWeight");

//Paragraph in which the answer is going to be shown
var answerText = document.getElementById("answerParagraph");

//Variable that will store the user´s weight in other planet
var answer;

//Planets gravity
var earthGravity = 9.8;
var marsGravity = 3.7;
var jupiterGravity = 24.8;

//Mars button
var marsButton = document.getElementById("mars");
marsButton.addEventListener("click", marsWeight);

//Jupiter button
var jupiterButton = document.getElementById("jupiter");
jupiterButton.addEventListener("click", jupiterWeight);

function marsWeight()
{
  answer = (weight.value * marsGravity) / earthGravity;
  answerText.innerHTML = "Your weight in mars is " + answer;
}

function jupiterWeight()
{
  answer = (weight.value * jupiterGravity) / earthGravity;
  answerText.innerHTML = "Your weight in jupiter is " + answer;
}
