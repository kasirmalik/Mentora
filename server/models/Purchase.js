import mongoose from "mongoose";


const PurchaseSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    userId: {
      type: String,
      ref: "User",
      required: true,
    },
    amount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "completed", "failed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Purchase = mongoose.model("Purchase", PurchaseSchema);
export default Purchase;


// get educator Dashboard data

export const educatorDashboardData = async(req,res)=>{
    try {
        const educator = req.auth.userId
        const courses = await Course.find({ educator: educator });
        const totalCourses = courses.length;
        const courseIds = courses.map((course) => course._id);
        const purchases = await Purchase.find({
          courseId: $in(courseIds),
          status: "completed",
        });
        const totalEarnings = purchases.reduce((total, purchase) => total + purchase.amount, 0);
        
        /// collect unique enrolled students data 
        const enrolledStudentsData = []
        for (const course of courses){
            const students = await User.find({
              _id: { $in: course.enrolledStudents },
            },'name imageUrl');
            students.forEach(student =>{
                enrolledStudentsData.push({
                    courseTitle: course.courseTitle,
                    student
                    
                })
            })
        }
        res.json({sucess:true,dashboardData:{
            enrolledStudentsData,
            totalEarnings,
            totalCourses
        }})
    } catch (error) {
        res.json({ sucess: false, message: error.message });
    }
};


