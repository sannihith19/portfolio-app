const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const GradeModel = require("./models/Grades")

const app = express()
app.use(cors())
app.use(express.json());


mongoose.connect("mongodb+srv://bdharanikota:sanni9@cluster0.2sdpltf.mongodb.net/person?retryWrites=true&w=majority")


app.get("/getGrades", (req,res) => {
    GradeModel.find({}).then(function(grades) {
        res.json(grades)
    }).catch(function(err) {
        res.json(err)
    })
})

app.post("/createGrade", async (req, res) => {
    const grade = req.body;
    const newGrade = new GradeModel(grade);
    await newGrade.save();
    res.json(grade);
})

app.listen(3001, ()=>{
    console.log("server is running")
})
