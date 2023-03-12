// BASIC 13 ALGORITHMS

// 1. Print all the integers from 1 to 255
function print1to255(){
    // FOR LOOP ITERATES FROM 1 TO 255
    for(var i=1; i<=255; i++){
        // PRINT CURRENT ELEMENT
        console.log(i);
    }
}

// console.log(print1to255());


// 2. Print all the odd integers from 1 to 255
function printOdds1To255(){
// FOR LOOP ITERATES FROM 1 TO 255 IN INCREMENTS OF 2
    for(var i=1; i<=255; i+=2){
        // PRINT CURRENT ELEMENTS
        console.log(i);
    }
}

// console.log(printOdds1To255());


// 3. Print integers from 0 to 255, and with each integer print the sum so far
function printIntsAndSum0to255(){
    // CREATE A VARIABLE TO TRACK SUM
    var sum=0;
    // FOR LOOP TO ITERATES FROM 0 TO 255
    for(var i=0; i<=255; i++){
        // ADD CURRENT INTEGER TO SUM
        sum += i;
        // PRINT THE INTEGER
        console.log(i);
        // PRINT THE SUM
        console.log(sum);
    }
}

// console.log(printIntsAndSum0to255());


// 4. Iterate through a given array, printing each value
function printArrayVals(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

// var printed = [10,9,8,7,6,5,4,3,2,1];
// printArrayVals(printed);


// 5. Given an array, find and print it largest element

function printMaxOfArray(arr){
    var max = 0;
    for(var i=0; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}

// var findMax = [420,69,777,8008135,101];
// printMaxOfArray(findMax);


// 6. Analyze an array's values and print the average

function printAverageOfArray(arr){
    var avg = 0;
    for(var i=0; i<arr.length; i++){
        avg += arr[i];
    }
    avg /= arr.length;
    console.log(avg);
}

// var findAvg = [22,23,24,25,26];
// printAverageOfArray(findAvg);


// 7. Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddsArray1To255(){
    var oddsArr = [];
    for(var i=1; i<=255; i+=2){
        oddsArr.push(i);
    }
    return oddsArr;
}

// var odds = returnOddsArray1To255();
// console.log(odds);


// 8. Square each value in a given array, returning that same array with changed values
function squareArrayVals(arr){
    for(var i=0; i<arr.length; i++){
        arr[i]*=arr[i];
    }
    return arr;
}

// var notSquared = [2,4,6,8];
// console.log(squareArrayVals(notSquared));


// 9. Given an array and a value Y, count and print the number of array values greater than Y
function printArrayCountGreaterThanY(arr,y){
    var count = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
            count++;
        }
    }
    console.log(count);
}

// var mixed = [1,6,9,2,8,4,10,5];
// printArrayCountGreaterThanY(mixed,5);


// 10. Return the given array, after setting any negative values to zero
function zeroOutArrayNegativeVals(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i]=0;
        }
    }
    return arr;
}




// 11. Given an array, print the max, min and average values for that array
function printMaxMinAverageArrayVals(arr){
    var max = 0, min = 0, avg = 0;
    for(var i=0; i<arr.length; i++){
        if(max < arr[i]){ 
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
        avg+=arr[i];
    }
    avg/=arr.length;
    console.log(max);
    console.log(min);
    console.log(avg);
}


// 12. Given an array, move all values forward (to the left) by one index, dropping the first 
//     value and leaving a 0 value at the end of the array
function shiftArrayValsLeft(arr){
    for(var i=0; i<arr.length; i++){
        if(i+1===arr.length){
            arr[i] = 0;
        }
        else {
            arr[i] = arr[i+1];
        }        
    }
    return arr;
}

// var shiftLeft = [1,2,3,4,5,6,7];
// console.log(shiftArrayValsLeft(shiftLeft));


// 13. Given an array of numbers, replace any negative values with the string 'Dojo'.
function swapStringForArrayNegativeVals(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]<0){
            arr[i] = "Dojo";
        }
    }
    return arr;
}

// var swapArr = [1,-2,3,4,-5,-6,7];
// console.log(swapStringForArrayNegativeVals(swapArr));