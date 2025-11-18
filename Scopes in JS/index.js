/**
 * 
 * named fun
 * anonymous fun
 * callback'
 * higherorder fun
 * first class fun
 * 
 * scopes in js:-
 * ---------------
 * ->Global scope
 * ->Block Scope
 * ->Functional or Local scope
 * 
 */

// // var a=10;
// //    a=30;
// //    a=40;
// //    console.log(a);


// // var a=30;
// //     a=40;
// //     var a;
// //     console.log(a);



// function a1(){
//     var a=30;
//     console.log(a);
    
// }
// a1()

// if(true){
    
//     console.log(a);
    
// }


function a(callback1,callback2){
    console.log(callback1());
    console.log(callback2());
    return callback1(10,20);
}

console.log(
    a(
    function (a,b){
    return a+b;
    
}, 

function (a,b){
    return a+b;
    
}
));









    



   

