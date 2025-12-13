
//Fetch Methods - GET,POST,PUT,PATCH,DELETE

//GET Method:
// -----------------------------------------------------------------------------------
            const URL1 = "https://api.escuelajs.co/api/v1/products";
            fetch(URL1).then(res=> res.json())
                    .then(data=>{
                        for(var i=1;i<=data.length;i++){
                        console.log(data[i].title);
                        }
                    });

            const URL2 = "https://dummyjson.com/quotes";
            fetch(URL2).
            then(res => res.json()).then(data => {
                for (var i = 0; i < data.quotes.length; i++) {
                console.log(data.quotes[i].quote);
                }
            }
            );

            const URL3 = "https://dummyjson.com/todos";
            fetch(URL3).then(res => res.json()).then(data=>{
            for(var i=0;i<data.todos.length;i++){
                console.log(data.todos[i].todo);
            }
            }
            );

            const URL4 = "https://jsonplaceholder.typicode.com/photos";
            fetch(URL4).then(res => res.json()).then(data=>{
            for(var i=0;i< data.length;i++){
                console.log(data[i].id);
            }}
            );

            const URL5 = "https://pokeapi.co/api/v2/pokemon/ditto";
            fetch(URL5).then(res=>res.json()).then(data=>console.log(data.stats));

            const URL6 = "http://localhost:3000/1okCodersData";
            fetch(URL6).then(res=>res.json()).then(data=>console.log(data));

            const URL7 = "http://localhost:3000/1okCodersData";
            fetch(URL7, {"methods":"PUT"}).then(res=>res.json()).then(data=>
            {
            for(var i=0;i<data.length;i++){
                console.log(data[i].StudentName);
            }
            }
            );


//POST Method:
// ----------------------------------------------------------
            fetch("http://localhost:3000/StudentData",{
                "method" : "POST",
                "headers" : {
                    "Content-Type" : "Application/json"
                },
                "body" : JSON.stringify({
                    "id":"6",
                    "name" : "nagesh"
                })
            }).then(res=>{
                if(res.ok) {
                    console.log(res.status,res.statusText);
                }
                else{
                    console.log("Something Went Wrong");    
                }
            }).catch(data=>console.log(data));


//PUT Method:
// ----------------------------------------------------------
            fetch("http://localhost:3000/StudentData/4",{
                "method" : "PUT",
                "headers" : {
                    "Content-Type" : "Application/json"
                },
                "body" : JSON.stringify({
                    "name" : "Raju",
                    "age" : "25"
                })
            }).then(res=>{
                if(res.ok) {
                    console.log(res.status,res.statusText);
                }
                else {
                    console.log("Something Went Wrong");
                }
            }).catch(data=>console.log(data));

//PATCH Method:
// ---------------------------------------------------------
            fetch("http://localhost:3000/StudentData/3",{
                "method" : "PATCH",
                "headers" : {
                    "Content-Type" : "Application/json"
                },
                "body": JSON.stringify({
                    "id" : "8",
                    "name" : "bakkodu",
                    "age" : "19"
                })
            }).then(res=>{
                if(res.ok) {
                    console.log(res.status,res.statusText);
                }
                else {
                    console.log("Something went Wrong");
                }
            }).catch(data=>console.log(data));

//DELETE Method:
// ----------------------------------------------------------
            fetch("http://localhost:3000/StudentData/6",{
                "method" : "DELETE"
            }).then(res=>{
                if(res.ok) {
                    console.log(res.status,res.statusText);
                }
                else {
                    console.log("something went wrong");
                }
            }).catch(data=>console.log(data));


//DELETE ALL Method:
// -------------------------------------------------------------
            fetch("http://localhost:3000/StudentData")
            .then(res=>res.json()).then(data=>{
                for(var i =0;i<data.length;i++) {
                    fetch(`http://localhost:3000/StudentData/${data[i].id}`,{
                        "method" : "DELETE"
                    }).then(res1=>{
                        if(res1.ok) {
                            console.log(res1.status,res1.statusText);
                        }   
                        else{
                            console.log("Something Went Wrong");
                        }
                    }).catch(data1=>console.log(data1));
                }
            }).catch(data2=>console.log(data2));

//POST ALL Method:
// ---------------------------------------------------------------

            let data = [
                {
                "id":"2",
                "name" : "Kabaddi"
                },
                {
                "id":"3",
                "name" : "Criket"
                },
                {
                "id":"4",
                "name" : "VolleyBall"
                },
                {
                "id":"5",
                "name" : "Kho-Kho"
                },
                {
                "id":"6",
                "name" : "Hand Ball"
                }
            ]
            fetch("http://localhost:3000/Games").then(res=>res.json())
            .then(res2=>{
                for(var i=0;i<data.length;i++) {
                    let obj = data[i];
                    fetch("http://localhost:3000/Games",{
                        "method" : "POST",
                        "headers" : {
                        "Content-Type" : "Application/json"
                        },
                        "body" : JSON.stringify(obj)
                    }).then(res1=>{
                        if(res1.ok) {
                            console.log(res1.status,res1.statusText);
                        }
                        else {
                            console.log("Something went wrong")
                        }
                    }).catch(data1=>console.log(data1))
                }
            });