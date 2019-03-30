// const DB_CONSTANTS = require("../../config/dbConstants");
// const userService = require("../services/user.service");
const courseController = {};
const _ = require("underscore");
const CustomError = require('../errors/custom-errors');
const DB_CONSTANTS = require('../../config/dbConstants');
const fs = require('fs');

courseController.readCourseList= async (req, res)=>{
    try{
        return new Promise((resolve, reject)=>{
            fs.readFile(DB_CONSTANTS.DATA_PATH + 'assign-2-data-courses-available-v2.json', (err, data) => {  
                if (err) throw err;
                let courseList = JSON.parse(data);
                resolve(courseList);
            });
        })
    }catch(error){
        throw new CustomError(DB_CONSTANTS.ERROR_MESSAGES.INTERNAL_SERVER_ERROR, 500);

    }
}


module.exports = courseController;
