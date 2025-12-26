const fs=require("fs");
//sync method to write data to a file
//fs.writeFileSync("./test.txt","Hello, this is a sample text file.")
//async method to write data to a file
//fs.writeFile("./test.txt","Hello, this is a sample text file.", (err) =>)
 // const result=fs.readFileSync("./CONTACT.txt","utf-8")
 // console.log(result)
//  const data=fs.readFile("./CONTACT.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }})
//fs.appendFileSync("./test.txt",`${Date.now()}This is appended text.`)
//fs.cpSync("./test.txt","./backup/test_backup.txt")
//fs.unlinkSync("./backup/test_backup.txt")
console.log(fs.statSync("./test.txt"))
