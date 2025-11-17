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