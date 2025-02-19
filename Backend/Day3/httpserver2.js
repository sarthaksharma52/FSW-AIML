const http = require("http");

const server = http.createServer(async (req,res)=>{
    res.setHeader("Content-Type","application/json");
    res.statusCode=200;
    const data = await fetch("https://api.github.com/search/users?q=location:ghaziabad");
    const dataJson = await data.json();
    const newdata = dataJson.items;
    const loginname = newdata.map((i)=>{
        return i.login;
    })
    res.write(JSON.stringify(loginname));
    res.end();
})

const port = 8100;

server.listen(port,(err)=>{
    try {
        if(err) throw err;
        console.log(`server is listen at port no. : ${port}`);
    } catch (err) {
        console.log("server error:",err.message);
    }
});