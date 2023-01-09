// ? TWO NUMBER SUM

/* 
Write a function that takes in a non-empty array of distinct integers 
and an integer representing a target sum. If any two numbers in the input 
array sum up to the target sum, the function should return them in an array,
in any order. If no two numbers sum up to the target sum, the function should
return an empty array.

Note tha the target sum has to be obtainsed by summing two different integers 
in the array; you can't add a single integer to itself in order to obtain the 
target sum.

You can assume that there will be a most one pair of numbers summing up to 
the target sum.
*/

function twoNumberSum(array, targetSum) {
    let result = [];
    for(let i=0; i<array.length; i++) {
        for(let j=i+1; j<array.length; j++) {
            if(array[i] + array[j] === targetSum) {
                result.push(array[i]);
                result.push(array[j]);
                break;
            }
        }
    }
    return result;
}

//!==========================//
//!         TESTING          //
//!==========================//