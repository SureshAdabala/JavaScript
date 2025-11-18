/**
 * what is functions:-
 * ->functions is a re-usable bloc of code
 * ->named functions can be hoisted
 * 
 * function difi
 * ---------------
 * function funname([parameters]){
 * //statements
 * [return]
 * }
 * function calling:-
 * -------------------
 * funName([arguments]) 
 * 
 * diff:-
 * named fun
 * first class fun
 * anonymous fun
 * arroe fun
 * call back fun
 * constroctore fun
 * high order fun
 * low order fun
 * default parameter fun
 * opetional parameter fun
 * rest parameter fun
 * immedite invoked fun
 * genratore fun
 * pure fun
 * impure fun
 */

// function funOne(callback){//parameter->callabck->high order fun
//     console.log(callback());

// }
// function funTwo(){
//     return "hello";
// }
// funOne(funTwo)//funTwo->funTwo difi->argument->callback

//a function which is taken callback as a parameter is known as high order function


// function one(a, b, c) {
//     console.log(c(a, b));
    
// }
// function two(a, b) {
//   return a+b;
// }
// one(10, 20, two)

// function funOne(a,b,c){
//     return c(a)+c(a+10)
// }
// function funTwo(a,b){
//     return a;
 
// }
// console.log(funOne(10,20,funTwo));

/**
 * 
 * anonymous function:-
 * ----------------------
 * a function which is not having a function Name is known as a anonymous function
 * 
 * wich can be diclared in callbacks and variables
 * 
 * sy:-
 * 
 * function ([oarameters]){
 * //statements
 * [return values]
 * }
 * 
 * 
 */

// var y= function (){
//     console.log("printed");
    
// }
// console.log(y);
// y()

// var x=function (a,b){
//     return a+b;
    
// }
// console.log(x(20,30));

// var x=function (){
//     console.log("printed");
    
// }
// x();
//a function whic is stored in a variable is known as a first class function

// var x=function (){
//     console.log("Hello There");
    
// }
// x();
// var x=function x(a,b){
//     return "a+b";
// }
// console.log(x(10,30));//error not-defined 



