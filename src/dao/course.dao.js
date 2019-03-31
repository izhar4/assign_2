const BaseDao = require("./base.dao");
const CourseModel = require("../models/course.model");

const courseDao = new BaseDao(CourseModel);
// console.log('stuuu', await studentDao.findMany({}, {}))

async function getCourseList(){
    const courseList = await courseDao.findMany({}, {});
    return courseList;
}

// async function getStudentById(id){
//     const student = await studentDao.findOne({studentId: id}, {});
//     return student;
// }
// async function createUser(data) {
//     let query = { provider: data.provider, email: data.email }
//     let options = {new: true, upsert: true};
//     const userData = await userDao.findOneAndUpdate(query, data, options).exec();
//     return userData;
// }

// async function getUserData(query){
//     const projection = {};
//     const userData = await userDao.findOne(query, projection);
//     return userData;
// }

module.exports = {
   getCourseList
};