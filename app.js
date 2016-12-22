$(document).ready(function() {
  var readout = $(".readout");
  var accumulation = [];
  
  $(".num").click(function() {
    accumulation.push($(this).html());
    console.log($(this).html());
    readout.html(accumulation.join(''));
  });

  $(".operator").not(".equals").click(function() {
    console.log($(this));
    accumulation.push($(this).html());
    readout.html(accumulation.join(''));
  });

  $(".c, .ca").click(function() {
    if ($(this).attr("class") === "ca") {
      accumulation = [];
      readout.html = "";
    }
    else {
      accumulation.pop();
      readout.html(accumulation.join(''));
    }
  });

  $(".equals").click(function() {
    console.log(eval(accumulation.join('')));
    readout.html(eval(accumulation.join('')));
  });
})
