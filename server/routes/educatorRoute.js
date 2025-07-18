import express from 'express';
import { addCourse, getEducatorCourses, updateRoleToEducator } from '../controllers/educatorController.js';
import upload from '../configs/multer.js';
import { protectEducator } from '../middlewares/authMiddleware.js';


const educatorRouter = express.Router()

// Add Educator Role

educatorRouter.get('/update-role',updateRoleToEducator)
educatorRouter.post('/add-course',upload.single('image'),protectEducator,addCourse);
educatorRouter.get('/courses',protectEducator,getEducatorCourses)

export default educatorRouter;