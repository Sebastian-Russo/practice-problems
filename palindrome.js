function palindromeCheck(str) {

  let string= str.replace(/[^0-9a-z]/gi, '').toLowerCase();

  for(let i=0; i < (string.length)/2; i++){ 
    if (string[i] !== string[string.length-i-1]) { 
      return false; 
    }
  }
  return true;
}


console.log(palindromeCheck('race car')); // true
console.log(palindromeCheck('race bar')); // false


// check if number is even 

function isEven(v) {
  let value = v
	if (value %2 == 0)
		return true;
	else
		return false;
}

console.log(isEven(2))
console.log(isEven(3))