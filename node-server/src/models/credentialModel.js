import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const CredentialSchema = new Schema({
    // login:{
    //     type: String,
    //     required: true
    // },
    // hashPassword:{
    //     type: String,
    //     required: true
    // },

    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthDate:{
        type: String,
     },
    login:{
        type: String,
        required: true
    },
    hashPassword:{
        type: String,
        required: true
    },
    passwordConfirm:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },

});

CredentialSchema.methods.comparePassword = async (password,hashPassword)=>{
    let body= await bcrypt.compareSync(password,hashPassword);
    return body
}
