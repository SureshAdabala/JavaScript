

/**
 * Async and Await :
 * ---------------------
 * Async return the promise object, It is a ES8 Featre Updated
 * Await means iterates the elements in promise object
 */

// function getData() {
//     return new Promise(resolve=>(resolve("Success")));
// }
// console.log(getData())
// getData().then(res=>console.log(res));

// async function getData(params) {
//     return "Hello There";
// }
// console.log(getData()); // Async returns only Promise Object
// getData().then(res=>console.log(res));

// console.log(Promise.resolve("Hello").then(res=> console.log(res))); // o/p:- Promise object and Hello 

// let promise1 = new Promise(reslove=>{
//     reslove("Success");
// })
// async function getData() {
//     let res = await promise1;
//     console.log(res);
// }
// getData(); // Success

// fetch("http://localhost:3000/Data")
// .then(res=>res.json())
// .then(data=>console.log(data));


// GET Method using Asunc and Await : 
// ----------------------------------------------------------
async function getData() {
    let res = await fetch("http://localhost:3000/Data");
    let res1 = await (res.json());
    console.log(res1);
}
getData();


// DELETE Method using async and await :
// -----------------------------------------------------------
async function deleteData() {
    let res = await(fetch("http://localhost:3000/Data/3",{
        "method" : "DELETE"
    }));
    console.log(res);
}
deleteData();


//POST Method using Await and Async :
//----------------------------------------------------------
async function postData() {
    let res = (await fetch("http://localhost:3000/Data",{
        "method" : "POST",
        "headers" : {
            "Content-Type" : "Application/json"
        },
        "body" : JSON.stringify({
            "id" : "1",
            "name" : "Suresh"
        })
    }));
    console.log(res);
}
postData();


// PUT Method using Async and AWait : 
// ------------------------------------------------
async function putData() {
    let res = await(fetch("http://localhost:3000/Data/4",{
        "method" : "PUT",
        "headers" : {
            "Content-Type" : "application/json"
        },
        "body" : JSON.stringify({
            "name" : "Kishore"
        })
    }))
}
putData();


// PATCH Method using Async and AWait : 
// ------------------------------------------------
async function patchData() {
    let res = await(fetch("http://localhost:3000/Data/5",{
        "method" : "PATCH",
        "headers" : {
            "Content-Type" : "Application/json"
        },
        "body" : JSON.stringify({
            "name" : "Kumar"
        })
    }))
}
patchData();


//DELETE ALL Method using Async and Await and ForEach : 
// -------------------------------------------------------
async function deleteAll() {
    let res = await (fetch("http://localhost:3000/Data"));
    let res1 = await res.json();

    for(ele of res1){
        await fetch(`http://localhost:3000/Data/${ele.id}`,{
            "method" : "DELETE"
        });
    };
    console.log(res1);
}
deleteAll();


//POST ALL Method using async and await and ForEach : 
// -------------------------------------------------------
let data = [
    {
        "id" : "1",
        "name" : "Suresh"
    },
    {
        "id" : "2",
        "name" : "Kishore"
    },
    {
        "id" : "3",
        "name" : "Manoj"
    },
    {
        "id" : "4",
        "name" : "Durgarao"
    },
    {
        "id" : "5",
        "name" : "Vinay"
    },
]

async function postAll() {
    for(ele of data){
        await fetch("http://localhost:3000/Data",{
            "method" : "POST",
            "headers" : {
                "Content-Type" : "application/json"
            },
            "body" : JSON.stringify(ele)
        });
    };
}
postAll();
