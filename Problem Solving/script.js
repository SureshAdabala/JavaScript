// 1. Create a function that takes two numbers as arguments and returns their sum.

function sum(a,b) {
    return a+b;
}
console.log(sum(10,20));

//-----------------------------------------------------------------------------------------

// 2. Write a function that takes an integer minutes and converts it to seconds.

function minutes(a) {
    return a*60;
}
console.log(minutes(2));

//------------------------------------------------------------------------------------------------------------

// 3. Create a function that takes a number as an argument, increments the number by +1 and returns the result.

function increment(a) {
    return a+1;
}
console.log(increment(20));

//------------------------------------------------------------------------------

// 4. Create a function that takes the age in years and returns the age in days.

function age(a) {
    let leapD = Math.floor(a/4);
    return (a*364) + leapD;
}
console.log(age(10));

//-------------------------------------------------------------------------------------

// 5. Create a function that takes voltage and current and returns the calculated power.

function power(v, c) {
    return v*c;
}
console.log(power(2,10));

//---------------------------------------------------------------------------------------------------------

// 6. Write a function that returns the string "something" joined with a space " " and the given argument a.

function joined(a) {
    return "Something "+a;
}
console.log(joined("to say"));

//--------------------------------------------------------------------------------------------------------------------------------------------

// 7. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function sums(a,b) {
    let sum = a+b;
    if(a==10 || b==10 || sum==10) {
        return true;
    }
    return false;
}
console.log(sums(10,20));

//------------------------------------------------------------------------------------------------------------------------------

// 8. Create a function that takes two strings as arguments and returns either true or false depending on 
//    whether the total number of characters in the first string is equal to the total number of characters in the second string.

function equal(a, b) {
    if(a.length==b.length) {
        return true;
    }
    return false;
}
console.log(equal("Suresh","Adabala"));

//------------------------------------------------------------------------------------------------------------------------------------------

// 9. Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

let data = (name)=>{
    return "Suresh Adabala";
}
console.log(data());

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function number(arr) {
    let phone = "(";
    for(i=0;i<arr.length;i++) {
        if(i === 3) phone+=") ";
        if(i === 6) phone+="-";
        phone+=arr[i]
    }
    return phone;
}
console.log(number([9,3,4,7,8,6,4,3,8,6]));

//-------------------------------------------------------------------------------------------

// 11. Create a function that returns an array of strings sorted by length in ascending order.
// Example:
// sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

function sorting(arr) {
    return arr.sort((a,b)=> a.length - b.length);
}
console.log(sorting(["aa","bbb","cccc","ddcd","s"]));

//---------------------------------------------------------------------------------------------

