/**************** Remove Duplicates in Array **************************/ 
let array = [1,1,1,2,3]
const uniqueArray = () => array.filter((item, i) => {
    return array.indexOf(item) == i;
})
console.log(uniqueArray())


/**************** Swap Consecutive Pair of Even Numbers **************************/ 

// Classic Dynamic program. Set count for even number meet. 
// Loop through the array, and check if even numbers are meet 
// and if the count is already meet you wanna swap them.

function evenPairs(nums) {
    let count = 0
    let prev = 0
    let temp = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0 && count === 0) {
            prev = i;
            count++;
        } else if (nums[i] % 2 === 0 && count === 1) {
            temp = nums[i]
            nums[i] = nums[prev]
            nums[prev] = temp
            count = 0
        }
    }

    return nums

}

console.log(evenPairs([2,3,4,6,8,])); // [4, 3, 2, 8, 6]



/**************** Rotate Left **************************/ 

function rotateLeft(arr, rotations) {
  const rotatedArray = [...arr]; // make copy of array with spread op 
  for (let i=0; i<rotations; i++) {
    const frontItem =  rotatedArray.shift(); // shift() removes first element, returns that element
    rotatedArray.push(frontItem); // push() adds element to end of array
  }
  return rotatedArray;
}

const numRotations = 3;
const sampleArray = [1, 2, 3, 4, 5] // [5,1,2,3,4]
// console.log(rotateLeft(sampleArray, numRotations));



/**************** Parentheses Grouping **************************/ 

function parenthesesGrouping(n) {
    let result = [];
    let count = 0;
    let str = '';
    
    for (let i = 0; i < n.length; i++) {
        if (n[i] == "(") {
            count++;
            str += n[i];
        } else if (n[i] == ")") {
            count--;
            str += n[i];
            if (count == 0) {
                result.push(str);
                str = "";
            }
        }
    }
    return result;
}

console.log(parenthesesGrouping("()()(()())")); // ["()", "()", "(()())"]


/**************** Two Pointers **************************/ 
// find two nums in the array that equal x

function twoPointer(array, X) {
    let i = 0;
    let j = array.length-1;
  
    while (i < j) {
      if (array[i] + array[j] == X) {
          console.log(array[i], '+', array[j])
          return true;
      } else if (array[i] + array[j] < X) {
        i++
      } else {
        j--
      }
    }
  
    return false;
}
  
  console.log(twoPointer([1,2,3,4,5,6,7], 13)) // true 
  console.log(twoPointer([1,2,3,4,5,6,7], 14)) // true 
  
  
  
  /**************** In-Place Move Zeros to End of List **************************/ 
  
  // Keep track of count
  // Traverse the array. If the element is non-zero, then
  // swap the element at index 'count' with the
  // element at index i
  
  function zeroEndOfList(nums) {
    let count = 0;
    let temp = 0; 
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            temp = nums[count]
            nums[count] = nums[i]
            nums[i] = temp;
  
            count++;
        }
    }
    return nums
  }
  
  console.log(zeroEndOfList([0,1, 4, 0,2,3])) // [1, 4, 2, 3, 0, 0]



/**************** Longest Alliteration **************************/ 

function longestAll(words) {

    //If there is nothing in the array you return zero 
    if (words.length === 0) {
        return 0
    }

    let count = 1
    let max = 1

    for (let i = 1; i < words.length; i++) {
        //comparing the second and the first index of the first letter
        // charAt() returns char value at specified index
        // vs indexOf() returns index of char spefied char/value 
        // nice alternative to nested loop
        if (words[i].charAt(0) === words[i - 1].charAt(0)) {
            count++
        } else {
            //If not continuous, compare the count from continuous same letters and the max. Set max as the one is larger in number. Reset max =1
            max = Math.max(count, max)
            count = 1
        }
    }

    //Lastly you compare the count and max once again, return the one in bigger number. We need to this, just in case the last words of the index in array also has the same first letter. It will not hit the else statement so return max or count are not correct. 
    return Math.max(count, max)
}


console.log(longestAll(["she", "sells", "seashells", "he", "sells", "clams"])); 
// 3
// ["she", "sells", "seashells"] all share the first letter s





// Write an algorithm to remove all the numbers less than five from the array. 
// fiveOrMore([1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11])

// Write an algorithm to merge the two arrays into a single array, which should be sorted. The two input arrays have already been sorted. 
// mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]) 

// Write an algorithm to find out the products of every number, expect the one at that index. 
// console.log(productOfArrayExceptSelf([1,2,3,4]));


