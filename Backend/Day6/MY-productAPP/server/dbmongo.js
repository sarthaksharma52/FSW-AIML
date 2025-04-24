const mongoose = require('mongoose');
const Mongo_url = "mongodb://localhost:27017";
mongoose.connect(Mongo_url)
.then(()=>{
    console.log("MOGODB Connected Successfuly")
})
.catch(err=>{
    console.log("DB Error",err.message)
})

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    }
})

const Student = mongoose.model("students",studentSchema);
const createStudent= async ()=>{
    try {
        const newStudent = new Student({name:"sona Sharma",email:"sona.dec04@gmail.com",age:20},{name:"lavish Sharma",email:"lavish@gmail.com",age:23});
        await newStudent.save();
        console.log("Student Created Successfully");
    } catch (err) {
        console.log("student Creation Error",err.message);
    }
}

const getStudent = async()=>{
    try {
        const student = await Student.find();
        console.log("Student:" , student);
    } catch (err) {
        console.log("Student data fetching error",err.message);
    }
}

const updateStudent = async () =>{
    try {
        const updatedStd = await Student.findOneAndUpdate({email:"sona.dec04@gmail.com"},{$set:{age:22}},{new:true});
        console.log("student data updated successfully",updatedStd);
    } catch (err) {
        console.log("student updation errors:",err.message);
    }
}

const deleteStudent = async () =>{
    try {
        const deletedStd = await Student.deleteOne({age:22});
        console.log("Deleted Student Data",deletedStd);

    } catch (err) {
        console.log("Student Deletion error" );

    }
}
// createStudent();
// getStudent();
// updateStudent();
// deleteStudent();

const app = async () =>{
    await createStudent();
    await updateStudent();
    await deleteStudent();
    await getStudent();
}

app();