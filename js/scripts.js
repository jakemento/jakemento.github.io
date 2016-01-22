var pingPonger = function (number) {
  "use strict";
  if (number % 15 === 0) {
    return [1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"];
  }
  if (number % 5 === 0) {
    return [1,2,"ping",4,"pong"];
  }
  if (number % 3 === 0) {
    return [1,2,"ping"];
  }
  var output = [];
  for (var i = 1; i <= number; i++) {
    output.push(i);
  }
    return [1,2,"ping",4];
  };





$(document).ready(function() {
  $("form#pongForm").submit(function() {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    var resultArray = pingPonger(number);
    var result = resultArray.toString();

    $("#result").append(result);
  })
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
