//delay 
//function Sum(a,b){
    //  c=a+b;
   //  console.log("Sum Function ", c);
//}
//Sum(2,3)
//setTimeout(Sum,3000,5,6);
//Arrow function
//setTimeout((a,b)=>{
   // c=a+b;
   // console.log("Sum Arrow Function ", c);
//},4000,7,8);
//console.log("Find sum after 4 seconds");
//callback function
// function getdata(id,getNextData){
//    setTimeout(()=>{
//        console.log("Data received for ID:", id);
//        if (getNextData) {
//          getNextData();
//       }
//    },8000);
// } //callback hell
// getdata(1,()=>{           //ARROW FUNCTION DOES NOT EXECUTE IMEDIATELY
//    getdata(2,()=>{
//          console.log("All data received");
//        });})
//promises are used to avoid callback hell
//let promise=new Promise((resolve,reject)=>{
//   console.log("Promises started");
//   resolve("Data received successfully");
//});
//promise.then((message)=>{
//   console.log(message);
//});
// Promise.then() and promise.catch()
//const getpromise=()=>{
//   return new Promise((resolve,reject)=>{
//      console.log("I am a promise:");
//        // resolve("Data received successfully");
//         reject("Error occurred");

//   });}
//   let promiseData=getpromise();
//   promiseData.then(()=>{
//      console.log("Promise resolved");
//   });
//   promiseData.catch((error)=>{
//      console.log("Promise rejected:", error);
//   });
// Async and Await

    
