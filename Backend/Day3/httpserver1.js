const http = require("http");
const fs = require("fs/promises");
const server = http.createServer(async (req,res)=>{
    const url = req.url;
    if(url=="/home" && req.method == "GET" ){
        // res.write("<h1>Home Page</h1>");
        const data = await fs.readFile("Home.html","utf-8")
        res.write(data);
    }
    else if(url=="/about" && req.method == "GET"){
        // res.write("<h1>About Page</h1>");
        const data = await fs.readFile("About.html","utf-8")
        res.write(data);
    }
    else{
        res.write("<h1>error page</h1>");
    }
    res.end();
});

const port = 8000;

server.listen(port,(err)=>{
    try {
        if (err) throw err;
        console.log(`server listen at ${port}`);

    } catch (err) {
        console.log("Server error:" , err);
    }
})