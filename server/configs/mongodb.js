import mongoose from "mongoose";



// connecct to database

const connectDB = async ()=>{
    mongoose.connection.on('connected',()=>{
        console.log("Database Connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Mentor`)
}

export default connectDB