// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

WARNING!!! WARNING!!!
The code does NOT currently work! It is YOUR job to make it work
as described in the requirements and the steps in order to complete this
assignment.
WARNING!!! WARNING!!!

*/

// STEP 1:
// Wrap the entire contents of script.js inside of an IIFE
// See Lecture 52, part 2
// (Note, Step 2 will be done in the SpeakHello.js file.)
(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  var mapping = function(name) {

      var firstLetter = name.charAt(0).toLowerCase();

      if (firstLetter === 'j') {
         return byeSpeaker.speakSimple(name);
      } else {
         return helloSpeaker.speakSimple(name);
    }}

    var mappedNames = names.map(mapping);

  // Print out each item in mappedNames
  for(var m = 0; m < mappedNames.length; m++)
  {
     console.log(mappedNames[m]);
  }

 
  //BONUS
  var hello = [];
  var goodbye = [];
  
  var countedNames = names.reduce(function (allNames) {
 
    for(name in allNames) 
    {
     if (firstLetter === 'j') {
         goodbye.push(byeSpeaker.speakSimple(name));
      } 
      else {
         hello.push(helloSpeaker.speakSimple(name));
       }
     }
  })

  // Print out each item in mappedNames
  for(var j = 0; j < hello.length; j++)
  {
     console.log(hello[j]);
  }

  // Print out each item in mappedNames
  for(var k = 0; k < goodbye.length; k++)
  {
     console.log(goodbye[k]);
  }

  // STEP 10:
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  // See Lecture 50, part 1
  for (var i = 0; i < names.length; i++) {

  // STEP 11:
  // Retrieve the first letter of the current name in the loop.
  // Use the string object's 'charAt' function. Since we are looking for
  // names that start with either upper case or lower case 'J'/'j', call
  // string object's 'toLowerCase' method on the result so we can compare
  // to lower case character 'j' afterwards.
  // Look up these methods on Mozilla Developer Network web site if needed.
   var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case
  // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
  // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
  // name in the loop.
    if (firstLetter === 'j') {
       byeSpeaker.speak(names[i]);
    } else {
       helloSpeaker.speak(names[i]);
    }
  }

})(window);

