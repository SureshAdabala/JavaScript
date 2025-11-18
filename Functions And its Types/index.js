/**
 * 
 * Functions in java Script:-
 * ---------------------------
 * functions are re-usable block of code>which can be re-arrange our code, and as well as re-used any no off times,named functions can be hoisted
 * 
 * diff types of functions:-
 * ->Named functions
 * ->first class functions
 * ->anonymous functions
 * ->arrow functions
 * ->call back functions
 * ->constructore functions
 * ->higher order functions
 * ->lower order functions
 * ->default parameter functions
 * ->optional parameter funxctions
 * ->rest parameter functions
 * ->immediate invoked functions
 * ->generatore functions
 * 
 * 
 * 
 * 
 * named functions:-
 * ----------------
 *         function defination:-
 *                 function functionName([parameters]){
 *                       //statements
 * 
 *                              [return value]
 *                 }
 * =>function defination is always store a function_Name
 * 
 *         function calling:-
 *                    function_Name([arguments]);
 *             
 * 
 * 
 */



// function Data(){
//     console.log("Printing data");

// }
// console.log(Data);//printingn data, undefined ,not defined,error
// Data();


// function kitchen() {
// //     console.log("Enter into Kitchen");

// //     console.log("Preparing food");
// //     delivery()

// //     console.log("enter kitchen after taking delivery");


// //     console.log("completed food");


// // }

// // function delivery() {
// //     console.log("Taking delivery");

// // }
// // kitchen();


// function one(){
//     console.log("started");
//     console.log("closed");
    
    
// }
// // one()
// // one()
// // one()
// // one()

// // function one(){
// //     console.log("one started");
    
// // }
// // function two(){
// //     console.log("two started");
// //     one()
    
// // }
// // two()
// // one();//

// function one(){
//     console.log("three");
    
// }
// function two(){
//     console.log("three");
//     one()
//     console.log("one");
    
    
// }
// function four(){
//     console.log("two");
//     two();
//     console.log("one");
    
    
// }
// four();
// one();
//2 3 3 1 1 3
//




// function sum(a, b){
// console.log(a+b);
// }
// sum(10,20)


function sum1(a,b,c){
    console.log(a);//10
    console.log(a+b+c);//95
     sum2(a+b);
    
    
}
function sum2(a,b){
    console.log(a);
    console.log(a+b);
    
    
}
sum1(10,20,65)
