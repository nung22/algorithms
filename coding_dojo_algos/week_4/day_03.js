const str1 = "racecar";
const expected1 = true;

const str2 = "bob";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "hoho!";
const expected4 = false;

function isPalindrome(str) {
  let str_reversed = "";
  for(let i = str.length - 1; i>=0; i--){
    str_reversed+=str[i];
  } 
  return str === str_reversed;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
console.log(isPalindrome(str4));