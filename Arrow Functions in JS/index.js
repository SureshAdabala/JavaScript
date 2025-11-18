/**
 *
 * Arrow functions in js:-
 * ---------------------------
 * ->it is a short hand of anonymous function
 * ->a function which does not have function keyword anf function name and it defined as a arrow(=>) is kinown as arrow function
 * ->the main adv of arrow function is implicit return type
 * ->this keyword can not accesspted by the arrow fun
 * 
 * sy:-
 *        ([parameters])=>{
 *    //statements
 * 
 *     }
 *  
 * 
 * 
 */


// let y=a=> a;

// y(34)

// function x(){
//     console.log("this is X fun");

// }
// function y(){
//     console.log("this is y fun");

// }
// function z(){
//     console.log("this is z func");

// }
// sample(x, y, z)


// function sample(x, y, z) {
//     console.log(x(10,20));
    
//     y(10,20);
//     z(2,4);
// }
// sample(
//     a=>a,
//     a=>a,
//     a=>a

// )

// let isEven=num=>{
//     if(num % 2==0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(isEven(3));

// var evenOdd = num => (num%2==0) ? "even" :"odd";
// console.log(evenOdd(2));

/**
 * 
 * create a named funtion and taking 2 parameters
 * 
 * and call the function in that pass the argument as a 2 arrow function and return their sum 
 * 
 */

function sum(x,y){
   console.log( x(10,20));
   
  
}
sum((kishore,krishna)=>{return kishore+krishna})

