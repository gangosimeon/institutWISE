import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    hashPassword: {
        type: String,
        required:true
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});

UserSchema.methods.comparePassword = async (password,hashPassword)=>{
    let body= await bcrypt.compareSync(password,hashPassword);
    return body
}
