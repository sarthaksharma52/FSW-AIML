const { error } = require("console");
const fs = require("fs/promises");

function myReadFile(){
    try{
      const res =  fs.readFile("dummy.txt","utf-8");
      res.then((data)=>{
        console.log("file data", data);
      })
      .catch((err)=>{
        throw err;
      })
    }
    catch(err){
        console.log("File Reading Error:", err.message);
    }
}

function myWriteFile(){
    try {
        const res = fs.writeFile("dummy.txt",data);
        res.then(()=>{
            console.log("writing successfully");
        })
        .catch((error)=>{
            throw error;
        })
    } catch (error) {
        console.log("file writting error: " , error.message);
    }
}

myReadFile();
const data = "full stack dev";
myWriteFile(data);