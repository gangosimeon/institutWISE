import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
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
    password:{
        type: String,
        required: true
    },
    companyName:{
        type: String,
        required: true
    },
});
