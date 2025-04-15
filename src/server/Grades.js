const mongoose = require("mongoose")
const GradeSchema = new mongoose.Schema({
    level: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
})

const GradeModel = mongoose.model("grades", GradeSchema)
module.exports = GradeModel;