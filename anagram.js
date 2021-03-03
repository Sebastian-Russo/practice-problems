function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let word1 = str1.split('').sort().join('');
  let word2 = str2.split('').sort().join('');

  // console.log(word1, word2)

  if (word1 === word2) {
    return true;
  } else {
    return false;
  }

}

// console.log(anagram('there', 'heret')) // true 
// console.log(anagram('asdf', 'asdj'))   // false 

/*************************************************/
//for...of statement creates a loop iterating over iterable objects

// for (variable of iterable) {
//   statement
// }

function anagram2(str1, str2) {
  // use an object to keep track of characters 
  
  let word1 = {};
  let word2 = {};

  let answer = true; 
  
  // loop over chars in string, creating key/value pair, letter = key, value is num of times 
  for (let letter of str1) {
    // setting each value for the keys, default 1 if it doesn't exist 
    // if letter repeats, take previous value + 1, that's the new value 
    word1[letter] = word1[letter] + 1 || 1; 
  }
  
  for (let letter of str2) {
    word2[letter] = word2[letter] + 1 || 1;
  }
  

  for (let letter of str1) {
    if (word1[letter] !== word2[letter]) { 
      answer = false;
    }
  }

  return answer;
}
  
console.log(anagram2('there', 'heret')) // true 
console.log(anagram2('asdf', 'asdj'))  // false

