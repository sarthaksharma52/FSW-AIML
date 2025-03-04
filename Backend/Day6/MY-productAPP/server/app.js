const express = require("express");
const fs = require('fs/promises');
const app = express();
const port = 3000;
const users=[];

const m1 = (req,res,next)=>{
    const age = req.query.age;
    if(!age){
        res.status(400).send("enter age in query");
    }
    else{
        if(age<18){
            res.status(401).send("user not authorized");
        }else{
            next();
        }
    }
}

// app.use(m1);   Industry level middleware

// route level middleware

// app.post("/createusers",m1,(req,res)=>{
//     const {name,email} = req.body;
//     const newId = Date.now();
//     const newUser={
//         id: newId,name,email
//     }
//     users.push(newUser);
//     res.status(201).json({status:"success",message: "user created successfully",data: newUser});
// });

app.use(express.json());

app.get("/users", async (req,res)=>{
    try {
        const data = await fs.readFile("./users.json","utf-8");
        res.status(200).json(JSON.parse(data));
    } catch (err) {
        res.status(400).send("file not found");
    }
})

app.get("/users/:id",(req,res)=>{
    const uid = req.params.id;
    const index = users.findIndex(ind=>ind.id==uid);
    if(index==-1){
        res.status(400).json({status: "fail",message: "user not found"});
    }
    else{
        res.status(200).json({status: "success",message: "user found",data:user[index]});
    }
});

app.post("/createusers",m1, async (req,res)=>{
    const {name,email} = req.body;
    const newId = Date.now();
    const newUser={
        id: newId,name,email
    }
    const data = await fs.readFile("./users.json","utf-8");
    users.push(JSON.parse(data));
    users.push(newUser);
    await fs.writeFile("./users.json",JSON.stringify(users));
    res.status(201).json({status:"success",message: "user created successfully",data: newUser});
});

app.patch("/editusers/:id",(req,res)=>{
    const uid = req.params.id;
    const {name,email} = req.body;
    if(!name || !email){
        res.status(400).json({status:"fail",message: "all field required"});
    }
    else{
        const index = users.findIndex(ind => ind.id == uid);
        if(index == -1){
            res.status(400).json({status: "fail",message: "user not found"});
        }
        else{
            users[index].name = name;
            users[index].email = email;
            res.status(200).json({status:"success",message: "user created successfully",data: users[index]});
        }
    }
    
})
app.delete("/deleteusers/:id",(req,res)=>{
    const uid = req.params.id;
    const index = users.findIndex(ind => ind.id == uid);
    if(index == -1){
        res.status(400).json({status: "fail",message: "user not found"});
    }
    else{
        const deldata = users.splice(index,1);
        res.status(200).json({status:"successful",message:"user delete successfully",data: deldata});
    }
    
})


app.listen(port,(err)=>{
    try {
        console.log(`server is listen at port: ${port}`);
    } catch (err) {
        console.log("server error: " , err.message);
    }
})