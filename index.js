// add solution here
function theBeatlesPlay(musicians, instruments) {
  var allMembers = [];
  for (var i = 0; i < musicians.length; i++) {
    allMembers.push(musicians[i] + " plays " + instruments[i]);
  }
  return allMembers;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var statements = [];
  var i = 0;
  while ( statements.length < facts.length) {
    statements.push(facts[i] + "!!!");
    i++; 
  }
return statements; 
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the beatles!");
    number += 1 
  } while (number < 15);
  return array
  }
