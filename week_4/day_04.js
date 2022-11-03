/* 
  Given an array of strings 
  return the snumber of times each string occurs (a frequency / hash table)
*/

const arr1 = ["a", "a", "a"]

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"] 


function makeFrequencyTable(arr) {
  let freq_table = {};
  for(let i = 0; i<arr.length; i++){
    if(!freq_table[arr[i]]){
      freq_table[arr[i]] = 1;
    }
    else{
      freq_table[arr[i]]++;
    }
  }
  return freq_table;
}


console.log(makeFrequencyTable(arr1));
console.log(makeFrequencyTable(arr2));