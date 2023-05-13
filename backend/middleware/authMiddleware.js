import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            //find a user based on the id and get back the user data except password. 
            req.user = await User.findOne(decoded.id).select('-password')
            next()
        } catch(error) {
            res.status(401)
            throw new Error("Not authorized, invalid token")
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authroized, no token')
    }

} )

export {protect}