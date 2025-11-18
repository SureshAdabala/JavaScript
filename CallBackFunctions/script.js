/**
 * Callback in Java Script:
 * -----------------------------------------------------
 * A callback is a function passed as an argument to another function.
 * This technique allows a function to call another function.
 * for example:
 * -----------------------------------------------------
 * function firstFunction(callback) {
 *      console.log("This is the first function.");
 *      callback();
 * }
 *
 * function secondFunction() {
 *      console.log("This is the second function.");
 * }
 * firstFunction(secondFunction);
 * 
 * 
 * 
 * note:
 * -----------------------------------------------------
 * A callback function in the form of named function, anonymous function, or arrow function can be passed as an argument to another function.
 */



function game1(callback) {
    console.log("Game 1 is starting...");
    console.log(callback);
    callback();
}

function game2() {
    console.log("Game 2 is starting...");
}

game1(game2);


function sum1(callback1, callback2) {
    callback1(20+30,40);
    callback2(50+50,60);
}
function sum2(a,b) {
    console.log(a+b);
    return a+b;
}
function sum3(b,a) {
    console.log(a+b);
}
sum1(sum2, sum3);