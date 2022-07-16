
//1.Positive or Negative
function isNumberPositive (number) {
     boolean = (number > 0);
    return(boolean)
}
    console.log (isNumberPositive(10));

//2. Convert days to age
function convertDaysToAge (days) {
    age = (days/365);
    return(age)
}
    console.log(convertDaysToAge(1000))

//3. Take three numbers and return the largest of the three

function findLargest (a,b,c) {
    largest = c > (a > b ? a : b) ? c : ((a > b) ? a : b); 
    return(largest)
}
    console.log(findLargest(69,420,666))

//4. write a function that takes an array of names and returns last name

let names = ["Andy" , "bex" , "sam" ];
lastName = names[names.length - 1]; 
console.log([lastName]);

//5.Write a function that takes an array of numbers and returns true if all 
//of the numbers are positive. It should return false if there are one or more
// negative numbers in the array.


function allNumbersPositive(arr){
    return arr.every(element => element > 0);
}
console.log (allNumbersPositive([2,4,5]))



