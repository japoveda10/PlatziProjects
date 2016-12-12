var weight = document.getElementById("userWeight");
var answer;

var earthGravity = 9.8;
var marsGravity = 3.7;
var marsButton = document.getElementById("mars");
marsButton.addEventListener("click", mars);

function mars()
{
  answer = (weight.value * marsGravity) / earthGravity;
  alert("Your weight in mars is " + answer);
}
