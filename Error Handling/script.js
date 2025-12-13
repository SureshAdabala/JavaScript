/**
 * 
 * Error Handling : 
 * ---------------------
 * try, catch, throw and finally
 * 
 */

//Eg : 1 - Error Handling in Varibles
// ===================================================
try {
    var a = 10;
    console.log(x+a);
}
catch(handler) {
    console.error(handler.message);
    console.log("Completed");
}


//Eg : 2 - Error Handling in Functions
// ===================================================
function x(v1,v2) {
    try {
        if(v2===0) throw new Error("Not Possible");
        else console.log(v1/v2); 
    }
    catch(error) {
        console.error(error.message);
    }
}
x(10,0);


//Eg : 3 - Error Handling in Functions(Var)
// ===================================================
var x = function(res) {
    // console.log("hello there");
    return "completed1";
};
try {
    x();
    return "completed";
}
catch(error) {
    console.log(error);
}

//Eg : 4 - Error Handling in fetch API
// ===================================================
fetch("https://fakestoreapi.com/product")
.then(res=>{
    try {
        if(!res.ok) throw new Error("Something went Wrong API");
    }
    catch(error) {
        console.error(error.message)
    }
}).then(data=>console.log(data));


//Eg : 5 - Error Handling in Async and Await
// ===========================================================================
async function getData() {
    try {
        let res = await fetch("https://fakestoreapi.com/product"); //Wrong API
        if(!res.ok) throw new Error("Not Valid API");

        let data = await res.json();
        console.log(data);

    }
    catch(error) {
        console.error(error.message)
    }
}
getData();

