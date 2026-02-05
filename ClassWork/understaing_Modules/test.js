const fs = require("fs");
fs.writeFile("file.txt","helloooo",{flag: "r+"},(err)=>{
    if(err){
        console.log(err.message);
    }
});
fs.writeFile("file.txt","helloooo",{flag: "w+"},(err)=>{
    if(err){
        console.log(err.message);
    }
});