/*
  Acronym
  Create a function that, given a string, returns the string's acronym
  (first letter of each word capitalized).
  Do it with .split first if you need to, then try to do it without
*/ 

// Oject Oriented Programming
const str1 = "object oriented programming";
const expected1 = "OOP";

// 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

// Software Development Life Cycle
const str3 = "software development life cycle"
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = " global  information tracker";
const expected4 = "GIT";


function acronymize(str) {
  // create a string to hold acronym
  let acronym = "";
  // iterate through given string
  for(let i=0; i<str.length; i++){
    // if first letter of a word, capitalize and add to acronym string
    if(str[i]!==" " && (i===0 || str[i-1]===" ")){
      acronym += str[i];
    }
  }
  return acronym.toUpperCase();
}

console.log(acronymize(str1));
console.log(acronymize(str2));
console.log(acronymize(str3));
console.log(acronymize(str4));