var divisThree = function (number) {
  if (number %3 === 0) {
    return "ping";
  }
};

var divisFive = function (number) {
  if (number %5 === 0) {
    return "pong";
  }
};

var divisTeen = function (number) {
  if (number %15 === 0) {
    return "pingpong";
  }
};

var returnRange = function (number) {
  var output = [];
  for (var i = 1; i <= number; i++) {
    output.push(i);
    }

  return output;
};








//
// var pigLatin = function(word){
//   if (isVowel(word)) {
//     return addAy(word)
//   } else {
//     return moveCons(word)
//     return addAy3(word)
//   }
// }
//
//
// var isVowel = function(word) {
//   if (word[0].match(/[aeiou]/)) {
//     return true;
//   }
//   return false;
// };
//
// var isCons = function(word) {
//   if ((word[0] !=~ /[aeiou]/) && (word[1] !=~ /[aeiou]/) && (word[2] !=~ /[aeiou]/)) {
//     return "two consonants";
//   }
//   if ((word[0] !=~ /[aeiou]/) && (word[1] !=~ /[aeiou]/)) {
//     return "two consonants";
//   }
//   else if (word[0] !=~ /[aeiou]/) {
//     return "one consonant";
//   }
// }
//
// var addAy = function (word) {
//   if (isVowel(word)) {
//     return (word.concat("ay"));
//   }
// };
//
// var moveCons = function (word) {
//
//   if (isCons(word) === "two consonants") {
//     console.log(isCons(word))
//     var string = word.slice(0,2);
//     word = word.slice(2);
//     return((word.concat(string))+("ay"));
//   }
//   if (isCons(word) ) {
//     console.log("three consonants!")
//
//     var string = word.slice(0,3);
//     word = word.slice(3);
//     return((word.concat(string))+("ay"));
//   }
//   if (isCons(word) === "one consonant") {
//     console.log("one consonants!")
//
//     var string = word.slice(0,1);
//     word = word.slice(1);
//     return((word.concat(string))+("ay"));
//     }
//   };
//
// var addAy3 = function (word) {
//
//   if (isCons(word)) {
//     var string = word.slice(0,2);
//     word = word.slice(2);
//     return((word.concat(string))+("ay"));
//   }
//
//   if (isCons(word)) {
//     var string = word.slice(0,3);
//     word = word.slice(3);
//     return((word.concat(string))+("ay"));
//   }
// };
//
// $(document).ready(function() {
//   $("form#pigLatinForm").submit(function(event) {
//     var word = $("input#word").val();
//     var result = pigLatin(word);
//
//
//     $("#result").append(result);
//     event.preventDefault();
//   });
// });
//
