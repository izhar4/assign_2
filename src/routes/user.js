const express = require("express");
const router = express.Router();
var userController = require('../controllers/userController');
var courseController = require('../controllers/courseController');

// var middlewares = require('../helpers/middleware');

router.get('/getStudentsList', async  (req, res, next)=> {
  try{
    const studentsData =  await userController.readStudentList(req, res);
    res.status(200).json({data: studentsData});
  }catch(error){
      next(error);
  }
  
})

router.get('/getCourseList', async  (req, res, next)=> {
  try{
    const courseData =  await courseController.readCourseList(req, res);
    res.status(200).json({data: courseData});
  }catch(error){
      next(error);
  }
  
})
module.exports = router;