const express = require("express");
const router = express.Router();
var studentController = require('../controllers/studentController');
var courseController = require('../controllers/courseController');

// var middlewares = require('../helpers/middleware');

router.get('/getStudentsList', async  (req, res, next)=> {
  try{
    const studentsData =  await studentController.getStudentsList(req, res);
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

router.get('/getStudent/:id', async  (req, res, next)=> {
  try{
    const student =  await studentController.getStudentById(req, res);
    res.status(200).json({data: student});
  }catch(error){
      next(error);
  }
  
})
module.exports = router;