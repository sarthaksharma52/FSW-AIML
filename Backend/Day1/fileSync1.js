// Asyncronons
// ->callBack
// ->promis
// ->async/await

const fs = require("fs");
function myReadFile(){

    try{
        const data = fs.readFileSync("dummy.txt","utf-8");
        if(data) {
            console.log("file data",data);   // we can also print it using data.toString() without using of incoding utf-8
            }
    // console.log("file data",data);
    }
    catch(err){
        console.log("file Error",err.message);
    }

}


function myWriteFile(data){
    try{
        // const data = " I am fine.";
        fs.writeFileSync("dummy.txt",data);
    }
    catch(err){
        console.log("file writing error",err.message);
    }
    
}

// myReadFile();
// myWriteFile();
// myReadFile();

module.exports = { myReadFile: myReadFile , myWriteFile: myWriteFile ,username: 'sarthak sharma'};