// function user() {
//         var name = "John";
//         var age = 25;
// //     console.log("name:", name);
// //     console.log(age);
//      return {name, age}
//  }

//  const {name,age}=user(); 
// console.log("name",name);
// console.log("age",age)
//GLOBAL scope
// var name,age
// function user() {
//         name = "John";
//         age = 25;
//         return {name, age};
// }
// user();
// console.log("name inside function:", name);
// console.log("age inside function:", age);

//block scope
function user() {
    if (true) {function scopeDemo() {
    if (true) {
        var usingVar = "var is function-scoped";
        let usingLet = "let is block-scoped";
        const usingConst = "const is block-scoped";
    }
    
    console.log(usingVar);   // ✅ Works - var is accessible in entire function
    console.log(usingLet);   // ❌ ReferenceError - let is block-scoped to the if block
    console.log(usingConst); // ❌ ReferenceError - const is block-scoped to the if block
}
        var name = "Ahmad";
        const age = 25;
        let city = "Islamabad";
        console.log("name inside block:", name);
        console.log("age inside block:", age);
    }
    console.log("name outside block:", name);
    //console.log("age outside block:", age); // ReferenceError
    //console.log("city outside block:", city); // ReferenceError
}
user();