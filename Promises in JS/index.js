/**
 *promises in JavaScript:
    *promises are state of a asynchronous operation, to perfrom success and failure operation.
 */

    //Example of promise in JavaScript
function placed(ID) {
    return new Promise((success)=>{
        console.log("Order Placed");
    });
}
function shipped(ID) {
    return new Promise((success)=>{
        console.log("Order Shipped");
    });
}
function dispatch(ID) {
    return new Promise((success)=>{
        console.log("Order Dispatched");
    });
}
function deliver(ID) {
    return new Promise((success)=>{
        console.log("Order Deleivered");
    });
}

placed(85634).then((msg)=>{
    console.log(msg); 
    return shipped(85634);
});
shipped(85634).then((msg)=>{
    console.log(msg); 
    return dispatch(85634);
});
dispatch(85634).then((msg)=>{
    console.log(msg); 
    return deliver(85634);
});
deliver(253634).then((msg)=>
console.log(msg));

    //example of promise chaining in JavaScript
      function add(val) {
      return new Promise((success)=>{
         console.log(val+20);
      });
   }
   function sub(val) {
      return new Promise((success)=>{
         console.log(val-5);
      });
   }
   function mul(val) {
      return new Promise((success)=>{
         console.log(val*2);
      });
   }
   function div(val) {
      return new Promise((success)=>{
         console.log(val/5);
      });
   }

   add(20).then((msg)=>{
      console.log(msg); 
      return sub(10);
   });
   sub(10).then((msg)=>{
      console.log(msg); 
      return mul(20);
   });
   mul(20).then((msg)=>{
      console.log(msg); 
      return div(5);
   });
   div(5).then((msg)=>
   console.log(msg));
