const express = require("express");
const app = express();

const port = 3000;
const products = [{
    id:1001,
    title: "Laptop",
    price: 51000,
    quantaty: 5
},
{
    id:1002,
    title: "Mobile",
    price: 21000,
    quantity: 6
}
];

app.use(express.json())

app.get("/products",(req,res)=>{
    res.status(200);
    res.json(products);
});

app.get("/product/:id" , (req,res)=>{
    const pid = req.params.id;
    const index = products.findIndex(ind=>ind.id==pid);
    if(index==-1){
        res.status(400).json({status:"fail",message:"product id not found"})
    }
    else{
        res.status(200).json({status:"success",message:"product id found",data: products[index]})
    }
});

app.post("/product",(req,res)=>{
    const {title,price,quantity} = req.body;
    if(title && quantity && price){
        const newId = products.length>0 ? products[products.length-1].id+1 : 1001;
        const newProduct = {
        id:newId,title,price,quantity
        }
        products.push(newProduct);
        res.status(201).json({status: "success",message: "product created successfully" , newProduct});
    }
    else{
        res.status(400).json({status: "fail",message: "All fields are required"});
    }
    

})

app.listen(port,(err)=>{
    try {
        if(err) throw err;
        else
        console.log(`app is listen at port: ${port}`);
    } catch (err) {
        console.log("server error: " ,err.message);
    }
    
})