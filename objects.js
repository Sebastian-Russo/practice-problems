// Instead of using an if statement 

function Conversation(comment) {

  const Response = {
    simpsons: 'Eat my shorts',
    childish: 'I know you are, but what am I?',
    gesture: 'Raise middle finger', 
    laugh: 'lol whatever',
    default: 'Don\'t care'
  }

  return Response[comment] || Response.default;
}

console.log(Conversation('simpsons'));
console.log(Conversation('childish'));
console.log(Conversation('gesture'));
console.log(Conversation('laugh'));
console.log(Conversation('nothing'));



/**************** TV Shows **************************/ 
//Given a list of strings shows, a list of integers durations, and an integer k, where shows[i] and durations[i] represent the name and duration watched by the ith person, return the total duration watched of the k most watched shows.

function tvShows(shows, durations, k) {

  let hash = {}
  // Store in an object hash for each duration according to the shows. If shows already exist add to their duration number.

  for (let i = 0; i < shows.length; i++) {
      if (hash[shows[i]]) {
          hash[shows[i]] += durations[i]
      } else {
          hash[shows[i]] = durations[i]
      }
  }

  // Getting the key only for the object hash 
  let keys = Object.keys(hash);
  // Sort the hash object descending order based on the value
  keys.sort((a, b) => hash[b] - hash[a]);

  let total = 0

  // iterate througth the hash with sorted keys in it and add them to  total 
  for (let j = 0; j < k; j++) {
      total += hash[keys[j]]
  }

  return total
}

console.log(tvShows(["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"], [5, 3, 5, 13, 4], 2)); // 23




function solve(nums, op, val) {

  const sign = (num, val, op) => {
      const operator = {
          '+': num + val,
          '-': num - val,
          '*': num * val,
          '/': num / val
      }
      return operator[op]
  }

  const answer = nums.map(num => Math.floor(sign(num,val,op)));

  return answer;
}

// Input: 
// nums = [3, 1, 6]
// op = "+"
// val = 4



/**************** String Isomorphism **************************/ 
// Given lowercase alphabet strings s, and t return whether you can create a 1-to-1 mapping for each letter in s to another letter (could be the same letter) such that s could be mapped to t, with the ordering of characters preserved.

function isomorphism(s, t) {

  const obj1 = {};
  const obj2 = {};

  for (let i=0; i<s.length; i++) {
   // check obj key/value exists first, go character by character to see if in obj
      if (obj1[s[i]]) {
          // if it doesn't match, return false 
          if (obj1[s[i]] !== t[i]) {
              return false 
          } 
      } else {
          // set value of second string to obj.key of first string
          obj1[s[i]] = t[i] 
      } 
  }
  // repeat second loop, to do the same for second string
  for (let i=0; i<t.length; i++) {
      if (obj2[t[i]]) {
          if (obj2[t[i]] !== s[i]) {
              return false 
          } 
      } else {
          obj2[t[i]] = s[i] 
      } 
  }

  return true
}

console.log(isomorphism('coco', 'kaka')) // true 
console.log(isomorphism('cat', 'foo')) // false 