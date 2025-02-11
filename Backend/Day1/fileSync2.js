const { myReadFile , myWriteFile ,username } = require("./fileSync1");

myReadFile();
const data = "good to know";
myWriteFile(data + " reply by " + username);
myReadFile();