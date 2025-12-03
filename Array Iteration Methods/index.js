const arr1 = [1, 2, 3];
const result = arr1.map((num) => console.log(num));

 const arr2 = [1, null, 2, undefined, 3];
let arr3 = arr2.filter(num => num !== null);
console.log(arr3);

const arr4 = [1, 2, 3];
    const result1 = arr4.filter((num, index, array) => array.includes(num + 1));
    console.log(result1);
/******
 * Array iterative methods :-
 * 
 * -> map()
 * -> filter()
 * -> reduce()
 * -> forEach()
 * -> some()
 * -> every()
 * -> find()
 * -> findIndex()
 * -> reduceRight()
 * 
 */

// let arr = [1, 2, 3, 4, 5, undefined, undefined, ,];
// function print() {
//     console.log("Hello There");    
// }
// arr.forEach(print);  // Hello There (5 times)

// let arr = [1, 2, 3, 4, 5, undefined, undefined, ,];
// for (let i = 0; i < arr.length; i++) {
//     console.log("Hello There");
// }

// let arr = [1, 2, 3, 4, 5];
// // for(i=1; i<=arr.length; i++){
// //     console.log(i);
// // }
// arr.forEach((element, index, arr) => {
//     console.log(element, index, arr);
// });

// let arr = ["HTML", "CSS", "JS", "ReactJS", "NodeJS"];
// arr.forEach((element) => {
//     console.log(element);
// });
// let newarr = [];
// arr.forEach((element) => {
//     newarr.push(element.toLowerCase());
// });
// console.log(newarr);  // [ 'html', 'css', 'js', 'reactjs', 'nodejs' ]

// let newarr = arr.map((element) => element.toLowerCase();
// console.log(newarr); // [ 'html', 'css', 'js', 'reactjs', 'nodejs' ]

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map((element) => element * element;
// console.log(newarr); // [ 1, 4, 9, 16, 25 ]

// let newarr = [];
// arr.forEach((element) => {
//     newarr.push(element * element);
// });
// console.log(newarr); // [ 1, 4, 9, 16, 25 ]

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map(val=>(val%2==0 ? "Even" : "Odd"));
// console.log(newarr); // [ odd, even, odd, even, odd ]

let arr = [1, 2, 3, 4, 5];
let newarr = arr.filter((element) => {
    return element % 2 === 0;
});
console.log(newarr); // [ 2, 4 ]