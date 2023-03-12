/*
  String: Reverse
  Given a string,
  return a new stirng that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

/* 
* Reverses the given str.
* @param {string} str, string to be reversed.
* @returns {string} The given str reversed.
*/


function reverseString(str) {
  let reversed_str = "";
  for(let i=str.length-1; i>=0; i--){
    reversed_str += str[i];
  }
  return reversed_str;
}

console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log(reverseString(str4));

//***********************************************************************************************************

/*
  String: Reverse
  Given a string of numbers,
  return a new string that is the given string reversed
*/

const num1 = 1234;
const expectedn1 = 4321;

const num2 = 2109470913;
const expectedn2 = 3190749012;

const num3 = 8282;
const expectedn3 = 2828;

const num4 = 1;
const expectedn4 = 1;

/* 
* Reverses the given str.
* @param {string} str, string to be reversed.
* @returns {string} The given str reversed.
*/

function reverseNum(num) {
  let numstr = num.toString();
  let reversed_num = "";
  for(let i=numstr.length-1; i>=0; i--){
    reversed_num += numstr[i];
  }
  return Number(reversed_num);
}

console.log(reverseNum(num1));
console.log(reverseNum(num2));
console.log(reverseNum(num3));
console.log(reverseNum(num4));