const studentDao = require("../dao/student.dao");
const _ = require("underscore");
const DB_CONSTANTS = require('../../config/dbConstants');
const courseDao =  require("../dao/course.dao");

async function getStudentsList() {
    const studentsList = await studentDao.getStudentsList();
    return studentsList;
}

async function getStudentById(id) {
    const student = await studentDao.getStudentById(id);
    return student;
}

async function getCourseList(){
    const courseList = await courseDao.getCourseList();
    return courseList;
}

async function getCourseByProgram(program){
    const query = {academicProgram: program}
    const courseList = await courseDao.getCourseList(query);
    return courseList;
}


module.exports = {
    getStudentsList,
    getStudentById,
    getCourseList,
    getCourseByProgram
};
