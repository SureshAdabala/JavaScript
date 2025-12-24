var names = ["Hero","MasterMind","Innovator","Scientist","player","Gamer"];

let btn = document.getElementById("btn");
let input = document.getElementById("input");
let result = document.getElementById("result");

btn.addEventListener("click",()=>{
    if(input.value.trim() === "") {
        result.innerText = "Please Enter the Name First";
        return;
    }
    let randomName = names[Math.floor(Math.random() * names.length)];
    result.innerText = `Your Nickname of your Name is ${randomName}`;
});