$(document).ready(function() {
var number = "";
var secondNumber = "";
var operator = "";
var newNumber = "";
var readout = $(".readout");
var answer = "";
$(".num").click(function() {
  number += $(this).html();
  console.log(number);
  readout.html(number);
});
$(".operator").not(".equals").click(function() {
  console.log($(this));
  operator = $(this).html();
  newNumber = number;
  number = "";
  readout.html("0");
});
$(".c, .ca").click(function() {
  number = "";
  readout.html("0");
  if ($(this).attr("class") === "ca") {
    newNumber = "";
  }
  else {
    newNumber = "";
    number = "";
    readout.html("");
  }
});
$(".equals").click(function() {
  floatNumber = parseFloat(number);
  floatNewNumber = parseFloat(newNumber);
  if (operator === "+") {
    answer = floatNewNumber + floatNumber;
    readout.html(answer);
  }
  else if (operator === "*") {
    answer = floatNewNumber * floatNumber;
    readout.html(answer);
  }
  else if (operator === "/") {
    answer = floatNewNumber / floatNumber;
    readout.html(answer);
  }
  else if (operator === "-") {
    answer = floatNewNumber - floatNumber;
    readout.html(answer);
  }
})



})
