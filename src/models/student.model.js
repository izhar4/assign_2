const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    academicProgram: {
	    type: String,
    },
    studentId: {
        type: String
    },
    familyName:{
        type: String
    },
    givenName:{
        type: String
    },
    birthDate: {
        type: String
    },
    email: {
        type: String
    },
    academicLevel: {
        type: Number
    },
    gpa: {
        type: Number
    } ,
    credits:[{
        courseCode:String,
        courseName: String,
        termCompleted: String,
        gradeEarned: String
    }]
});

module.exports = mongoose.model("students", studentSchema);
