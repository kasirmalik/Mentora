import { clerkClient } from "@clerk/express";


// MiddleWare (Protectect Educator route)
export const protectEducator = async (req, res, next) => {
    try {
        const userId = req.auth.userId
        const response = await clerkClient.users.getUser(userId)
        if (response.publicMetadata.role !== "educator") {
            return res.json({
              sucess: false,
              message: "You are not an educator",
            });
        }
        next()
    } catch (error) {
        res.json({
            sucess: false,
            message: "You are not an educator",
        });
    }
    }