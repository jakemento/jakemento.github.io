var pingPonger = function (number) {
  var output = [];
  for (var i = 1; i <= number; i++) {
    output.push(i);
  }
  finalResults = [];

  output.forEach(function(entry){

  if (entry % 15 === 0) {
    finalResults.push("pingpong");
    // output[i="pingpong"];

  } else if (entry % 5 === 0) {
    finalResults.push("pong");
    // output[i="pong"];

  } else if (entry % 3 === 0) {
    finalResults.push("ping");
    // output[i="ping"];

  } else {
    finalResults.push(entry);
  }
});
  return finalResults;
};


$(document).ready(function() {
  $("form#pongForm").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    var resultArray = pingPonger(number);
    var result = resultArray.toString();

    $("#result").append(result);
  });
});
