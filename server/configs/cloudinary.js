import {v2 as cloudinary} from 'cloudinary';
const connectCloudinary = async () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        cloud_name: process.env.CLOUDINARY_API_SECRET,
    })
}

export default connectCloudinary;