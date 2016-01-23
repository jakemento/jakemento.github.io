var pingPonger = function (number) {
  var output = [];
  for (var i = 1; i < number; i++) {
    output.push(i);
  }

  if (number % 15 === 0) {
    output.push("pingpong");
    // output[i="pingpong"];

  } else if (number % 5 === 0) {
    output.push("pong");
    // output[i="pong"];

  } else if (number % 3 === 0) {
    output.push("ping");
    // output[i="ping"];

  } else {
    output.push(i);
  }
  return output;
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


// var returnRange = function (number) {
//   var output = [];
//   for (var i = 1; i <= number; i++) {
//     output.push(i);
//     }
//   return output;
// }
//
//
//
// var divisThree = function (number) {
//   if (number %3 === 0) {
//     return "ping";
//   }
// };
//
// var divisFive = function (number) {
//   if (number %5 === 0) {
//     return "pong";
//   }
// };
//
// var divisTeen = function (number) {
//   if (number %15 === 0) {
//     return "pingpong";
//   }
// };
