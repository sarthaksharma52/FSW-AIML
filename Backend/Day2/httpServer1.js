const http = require("http");
const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==="/home" && req.method=="GET"){
        res.write("<h1>my home page</h1>");
    }else if(url === "/about" && req.method=="POST"){
        res.write("<h1>about page</h1>");
    }
    else{
        res.write("<h1>error page</h1>");
    }
    res.end();

});

const port = 3000;

server.listen(port,()=>{
    console.log(`server is running at ${port} `);
})