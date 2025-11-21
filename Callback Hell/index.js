/**
 * Callback Hell Definition:
 * -----------------------------------------
 * Callback hell, also known as "Pyramid of Doom," refers to a situation in programming where multiple nested callbacks 
 * make the code difficult to read and maintain.
 * This often occurs in asynchronous programming, particularly in JavaScript,
 * where functions are passed as arguments to other functions and executed later.
 */


//Examples Of Callback Hell:

    // Example 1: Nested Callbacks
    function add(val,callback) {
        callback(val + 10);
    }
    function sub(val, callback) {
        callback(val-5);
    }
    function mul(val,callback) {
        callback(val*2);
    }
    function div(val,callback) {
        callback(val/2);
    }
    console.log("Example 1: Nested Callbacks");
    add(10, (addVal) => {
        console.log("Addition Result: "+addVal);
        sub(addVal, (subVal)=> {
            console.log("Subtraction Result: "+subVal);
            mul(subVal,(mulVal)=> {
                console.log("Multiplication Result: "+mulVal);
                div(mulVal,(divVal)=> {
                    console.log("Division Result: "+divVal);
                });
            });
        });
    });

    // Example 2: Deeply Nested Callbacks
    function add(val, callback) {
    callback(val);
    }
    function sub(val, callback) {
        callback(val);
    }
    function mul(val, callback) {
        callback(val);
    }
    function div(val, callback) {
        callback(val);
    }

    console.log("\nExample 2: Deeply Nested Callbacks");
    add(15, (addValue) => {
        console.log("Addition Result: "+(addValue+10));
        sub(addValue, (subValue) => {
            console.log("Subtraction Result: "+(subValue-5));
            mul(subValue, (mulValue) => {
                console.log("Multiplication Result: "+(mulValue*2));
                div(mulValue, (divValue) => {
                    console.log("Division Result: "+(divValue/2));
                });
            });
        });
    });

    // Example 3: Asynchronous Operations with Callbacks
    console.log("Start");
    setTimeout(()=> {
        console.log("first");
    },2000);
    for(var i = 1;i<=50000;i++) {
        console.log("i");
    }
    setTimeout(()=> {
        console.log("second");
    },3000);
