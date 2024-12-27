import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { CredentialSchema} from "../models/credentialModel";

const Credential =mongoose.model('Credential',CredentialSchema);


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
        const newCredential = new Credential(req.body);
        newCredential.hashPassword = await bcrypt.hashSync(req.body.password, 10);
        const credential = await newCredential.save();
        credential.hashPassword = undefined;
        return res.json(credential);
    } catch (err) {
        return res.status(400).send({
            message: err
        });
    }
};


export const login = async (req, res) => {
    try {
        const credential = await Credential.findOne({ login: req.body.login });
        if (!credential) {
            return res.status(400).json({ message: 'Credential not found!' });
        }
        if (!credential.comparePassword(req.body.password, credential.hashPassword)) {
            return res.status(401).json({ message: 'Wrong password, try again!' });
        }
        return res.json({
            token: jwt.sign(
                { login: credential.login, _id: credential.id },
                'RESTFULAPIs'
            ),
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

};

export const getCredentialUsers = async (req, res) => {
    try {
        let credentials = await Credential.find({}); // Utiliser await sans callback
        res.json(credentials);
    } catch (err) {
        res.send(err);
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
    if(req.credential){
        next();
    }else{
        return res.status(401).json({message:'Unauthorized user !'});
    }
}