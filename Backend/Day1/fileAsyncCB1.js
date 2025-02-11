const { ifError } = require("assert");
const fs = require("fs");

function myReadFile(){
    try {
        const data = fs.readFile("dummy.txt","utf-8", (err, data)=>{
            if(err){
                throw err;
            }else{
                console.log("file data:",data);
            }
        });
    } catch (err) {
        console.log("file reding error",err.mrssage);
    }
}

function myWriteFile(){
    try {
        const data = fs.writeFile("dummy.txt","what are you doing",(err)=>{
            if(err){
                throw err;
            }
            console.log("data write successfully in file");
        });
    } catch (error) {
        console.log("file writing error",error.mrssage);
    }
}

myReadFile();
myWriteFile();
myReadFile();
