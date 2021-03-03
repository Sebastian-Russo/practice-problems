/**************** Eliminate It! **************************/ 

// Given a lowercase alphabet string s, remove all “y” and “xz” in the string in one iteration.

function eliminate(s) {
  let str = ""

  for (let i = 0; i < s.length; i++) {
      if (s[i] === 'y') {
        // ignore
          continue
          // check if string and prior string  are equal to 'xz'
      } else if (s[i] == 'z' && s[i - 1] == 'x') {
        // remove the last string of str
          str = str.substring(0, str.length - 1)
      } else {
        // f both constraints are not valid, then we store the string into the variable str.
          str += s[i]
      }
  }

  return str
}

console.log(eliminate("xyxyxz")) // xx
console.log(eliminate("xyz")) // xz



/**************** cameCase **************************/ 

function camelCase(words) {
  let results = words[0].toLowerCase()

  for (let i = 1; i < words.length; i++) {
      // substring() method returns the part of the string between the start and end indexes, or to the end of the string
      results += words[i][0].toUpperCase() + words[i].substring(1).toLowerCase()
  }

  return results
}

console.log(camelCase(["java", "beans"]))  // "javaBeans"
console.log(camelCase(["Go", "nasa"]))  // "goNasa"


