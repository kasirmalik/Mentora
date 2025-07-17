import {clerkClient} from '@clerk/express'
import { v2 as cloudinary } from "cloudinary";

export const updateRoleToEducator = async (req,res)=>{
    try {
        const userId = req.auth.userId
        await clerkClient.users.updateUserMetadata(userId,{
            publicMetadata:{
                role: 'educator',
            }
        })
         res.json({success:true,message:'You can Publish Course Now'});

    } catch (error) {
         res.json({success:false,message:error.message});
    }
};

//Add new Course

export const addCourse = async (req,res)=>{
    try {
        const {courseData} = req.body;
        const imageFile = req.file;
        if (!imageFile) {
           return res.json({success:false,message:'Please Upload Image'});
         
        }
        const parsedCourseData = JSON.parse(courseData);
        parsedCourseData.educator = educatorId;
        const newCourse = await Course.create(parsedCourseData);
       const imageUpload= await cloudinary.uploader.upload(imageFile.path)
       newCourse.courseThumbnail= imageUpload.secure_url
       await newCourse.save();
        res.json({success:true,message:'Course Added Successfully'});
 
        
        

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

// get educator courses

export const getEducatorCourses = async (req,res)=>{
    try {
        const userId = req.auth.userId;
        const courses = await Course.find({ educator: userId });
        res.json({ success: true, courses });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

