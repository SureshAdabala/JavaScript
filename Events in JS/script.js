// let btn1 = document.getElementById("btn-1");
// let btn2 = document.getElementById("btn-2");
// let btn3 = document.getElementById("btn-3");

// btn1.onclick=()=>{
//     document.body.style.background = "red";
//     btn2.remove();
// }

// btn3.onclick = ()=> {
//     container.style.opacity = 0;
// }


// let btn = document.getElementById("btn");
// btn.addEventListener("click",()=>{
//     container.style.opacity = "0";
// });

// let btn = document.getElementById("btn");
// btn.addEventListener("click",async ()=>{
//     let res = await fetch("http://localhost:3000/data");
//     try {
//         if(!res.ok) {
//             throw new Error("Something Went Error");
//         }
//         let data = await res.json();
//         getData(data);
//     } catch (error) {
//         console.log(error.message);
//     }
// });

function getData(data) {
    let con = document.getElementById("container");
    data.forEach(ele => {
        let item = document.createElement("div");
        item.className = "box";
        item.innerHTML = `
        <h2>ID : ${ele.id}</h2>
        <h4>Title : ${ele.title}</h4>
        <img src = ${ele.image} width=100px height=150px>
        <p>Price : ${ele.price}</p>
        <button class='remove'>Remove</button>`
        
        let btn = item.querySelector(".remove");
        btn.addEventListener("click",()=>{
            item.remove();
        });
        con.appendChild(item);
    });
}

<button id = "btn-2"></button>
const btn2 = document.getElementById("btn-2");
btn2.onlick = function () {
    alert("Button Clicked");
};

<button id="btn">Click</button>
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
alert('Button Clicked');
});
