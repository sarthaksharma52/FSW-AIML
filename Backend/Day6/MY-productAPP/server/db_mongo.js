const {MongoClient} = require("mongodb");
const Mongo_url = "mongodb+srv://sarthakdec04:sarthak0052@cluster0.3aqzs.mongodb.net/FSD-CS-AIML?retryWrites=true&w=majority&appName=Cluster0"

MongoClient.connect(Mongo_url)
.then(client=>{
    console.log("MONGODB Connected");
})
.catch((err)=>{
    console.log("DB Error",err);
})