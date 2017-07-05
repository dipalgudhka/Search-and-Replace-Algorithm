/*
Disclaimer: This is a storage for the coding I do at freecodecamp.
*/

function myReplace(str, before, after) {
  
  var word = [];
  
  if (before[0] == before[0].toUpperCase()) {
    for (var i = 0; i < after.length; i++) {
      word[i] = after[i];
    }
    
    word[0] = word[0].toUpperCase();
    after = word.join('');
  }
  
  str = str.replace(before, after);
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");

/*
All the parameters are listed as follows:

myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
*/
