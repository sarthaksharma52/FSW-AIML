const fs = require("fs/promises");

async function myReadFile(){
    try {
        const res = await fs.readFile("dummy.txt","utf-8");
        console.log(res);
    } catch (error) {
        console.log("File reading error: " , error.message);
    }
}

async function myWriteFile(){
    try {
        await fs.writeFile("dummy.txt",data);

    } catch (error) {
        console.log("write file error: " , error.message);
    }
}

myReadFile();
const data = "lavish is very mettha";
myWriteFile();