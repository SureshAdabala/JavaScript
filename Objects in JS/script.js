// One Type of Creating an Object
let person = {
    name : "Suresh",
    age : "31"
}
console.log(person.name);
console.log(person.age);

let person2 = {
    name : "Manoj",
    greet : function() {
        console.log("Hi Everyone!!!")
    }
}
person2.greet();

//Second type of Creating an object
let person1 = new Object();
person1.name = "Kishore",
person1.age = "22";
console.log(person1);

delete person.name;  //For Deleting Object
console.log(person.name); // Output - undefined

//Object Methods:

//1. Object.keys() : returns the object Property Names.
let ob = {a:1,b:2,c:3}
console.log(Object.keys(ob));

let ob1 = {Suresh : 22,Kishore:21,Manoj:23,Vinay:24} 
console.log(Object.keys(ob1));

//2. Object.values() : returns the Object Values.
let ob2 = {a:1,b:2,c:3}
console.log(Object.values(ob2));

let ob3 = {Suresh : 22,Kishore:21,Manoj:23,Vinay:24} 
console.log(Object.values(ob));

//3. Object.entries() : Returns the Object of Array in [key, value] based.
let ob4 = {a:25,b:26,c:20}
console.log(Object.entries(ob4));

//4. Object.assign() : Copies the values of all enumerable own properties from one or more source objects to a target object.
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
Object.assign(target, source);
console.log(target); 
console.log(source);

//5. Object.create() : Creating an own object using method.
const ob5 = Object.create({height:2.45});
console.log(ob5.height)

//6. Object.freeze() : It freezes the object, after freezing do not perform any operations on that object.
const ob6 = {a:23,b:26}
Object.freeze(ob6);
ob6.c = 30;
console.log(ob6);

//7. Object.seal() : Seals a Object, After sealing do not perform adding and deleting operations on that object. ONly performs Modifying the Object.
const ob7 = {a:22,b:33}
Object.seal(ob7);
ob7.c=44;
delete ob7.a;
ob7.a = 55;
console.log(ob7);

//8. Object.hasOwnProperty() : It checks value havs own property name. It returns the boolean.
const ob8 = {a:23,b:36}
console.log(ob8.hasOwnProperty("a" || "c"));



//ITERATION in Loops

var obj={
name:"johnn",
age:20,
city:{
name:"new york"
}
}
for(key in obj) {
    console.log(obj[key]);
}

for ( keys of Object.keys(obj)) {
console.log(`${keys}`);
}

for ( value of Object.values(obj)) {
console.log(value);
}

for ( [key, value] of Object.entries(obj)) {
console.log(`${key}: ${value}`);
}

