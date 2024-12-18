import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserSchema } from "../models/userModel";

const User =mongoose.model('User',UserSchema);


// export const register=async (req, res)=>{
//     const newUser= new User(req.body);
//     newUser.hashPassword= await bcrypt.hashSync(req.body.password, 10);
//     newUser.save((err,user)=>{
//         if(err){
//             return res.status(400).send({
//                 message:err
//             });
//         }else{
//             user.hashPassword=undefined;
//             return res.json(user)
//         }
//     });
// }
export const register = async (req, res) => {
    try {
        const newUser = new User(req.body);
        newUser.hashPassword = await bcrypt.hashSync(req.body.password, 10);
        const user = await newUser.save();
        user.hashPassword = undefined;
        return res.json(user);
    } catch (err) {
        return res.status(400).send({
            message: err
        });
    }
};


export const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: 'User not found!' });
        }
        if (!user.comparePassword(req.body.password, user.hashPassword)) {
            return res.status(401).json({ message: 'Wrong password, try again!' });
        }
        return res.json({
            token: jwt.sign(
                { email: user.email, username: user.username, _id: user.id },
                'RESTFULAPIs'
            ),
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};


// export const login = async(req, res)=>{
//     await User.findOne({
//         email:req.body.email
//     },(err,user)=>{
//         if (err) throw err;
//         if(!user){
//             res.status(400).json({message:'User not found !'})
//         }else if (user) {
//             if (!user.compareSync(req.body.password,user.hashPassword)) {
//                 res.status(401).json({message:'Wrong password, try again !'});
//             }else{
//                 return res.json({token:jwt.sign({email:user.email, usermane:user.usermane,_id:user.id},'RESTFULAPIs')});
//             }
//         }
//     });
// }

export const loginRequired= async(req, res, next)=>{
    if(req.user){
        next();
    }else{
        return res.status(401).json({message:'Unauthorized user !'});
    }
}