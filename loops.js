//products=10
//for(let i = 1; i <= products; i++) 
//{
    // console.log("product",i);
//}
// Generate sequential product IDs
// let productIds = [];

// for(let i = 1001; i <= 1020; i++) {
//     productIds.push(`PROD-${i}`);
// }
// //console.log(productIds);
// // Generate multiple color variants
// let product = "SHIRT";
// let colors = ["RED", "BLUE", "GREEN", "BLACK"];
// let size = [];

// for(let size = 1; size <= 6; size++) {  // sizes S(1) to XL(5)
//     for(let color of colors) {
//         size.push(`${product}-${size}-${color}`);
//     }
// }
// console.log(size)

// Generate multiple color variants
//let product="Dry Fruit"
//let categories = ["ALMONDS", "CASHEWS", "WALNUTS", "PISTACHIOS", "RAISINS", "APRICOTS", "DATES"];
//let price
//let variants= [];

//for(let weight = 1 ; weight  <= 6; weight ++) {  
 //   for(let categorie of categories) {
   //     variants.push(`${categorie}-${weight}kg`);
   // }
//}
// console.log(variants)


let info ={name: "Batool",email : "ghsdsj121@gmail.com",
password :"@326hjs#",address : ["street", "city", "country"], 
phoneNo :1243456}
for (let key in info)
    {
    console.log(key, ":", info[key]); 
    }
