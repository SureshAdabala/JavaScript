/**
 * BOM (Browser Object Model)
 */

// let resultWindow;
// function openWindow() {
//     resultWindow = window.open("https://www.example.com/"," ","width=500px,height=500px")
//     resultWindow.document.write(``);
// }

// function closeWindow() {
//     let flag = window.confirm(resultWindow);
//     if(flag) {
//         resultWindow.close()
//     }
//     else{
//         alert("Okay Continue")
//     }
// }

// Reload Method :-
// window.setInterval(()=>{
//     window.location.reload();
// },2000);


//-------------Stop Watch-------------------
// let result = null;
// function startLoop() {
//     let i=1
//     result = window.setInterval(()=>{
//         let data = new Date();
//         console.log(data.getSeconds()); 
//     },1000);
// }
// function stopLoop() {
//     window.clearInterval(result);
// }

// localStorage.setItem("name","Suresh")
// alert(localStorage.getItem("name"));

function savedata() {
    let inputV = document.querySelector("#inputV");
    let inputN = document.querySelector("#inputN");
    localStorage.setItem(inputV.value,inputN.value)
}