import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

const User = mongoose.model('User', UserSchema);


export const addNewUser = async (req, res) => {
    try {
        let newUser = new User(req.body);

        // const {login}=req.body;
        // const login = req.body.login
        const login = newUser.login
        const userExist= await User.findOne({login})
        console.log(userExist)
        if(userExist){
            return res.status(202).json({
                status: 202,
                data: newUser,
                comment: 'Le login ['+login+'] que vous utiliser est déja pris'
            })
        }else{
            let user = await newUser.save(); // Utiliser await sans callback
            res.json({
                status: 200,
                data: user,
                comment: 'Enregistrement réaliser avec succes',
            });
        }
        
    } catch (err) {
        res.send(err);
    }

}
// export const addNewUser = async (req, res) => {
//     try {
//         let newUser = new User(req.body);
//         if(newUser.login== "Constant"){
//             return res.status(202).json({
//                 status: 202,
//                 data: newUser,
//                 comment: 'Le login que vous utiliser est déja pris'
//             })
//         }else{
//             let user = await newUser.save(); // Utiliser await sans callback
//             res.json({
//                 status: 200,
//                 data: user,
//                 comment: 'Enregistrement réaliser avec succes',
//             });
//         }

//     } catch (err) {
//         res.send(err);
//     }
// };
// export const addNewUser = async (req, res) => {
//     try {
//         let newUser = new User(req.body);
//         let user = await newUser.save(); // Utiliser await sans callback
//         res.json(user);
//     } catch (err) {
//         res.send(err);
//     }
// };
// export const addNewUser = async(req, res) => {
//     let newUser =await new User(req.body);

//     newUser.save((err, User) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(User);
//     });
// };

export const getUsers = async (req, res) => {
    try {
        let users = await User.find({}); // Utiliser await sans callback
        res.json(users);
    } catch (err) {
        res.send(err);
    }
};
// export const getUsers = async(req, res) => {
//     await User.find({}, (err, User) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(User);
//     });
// };


export const getUserWithID = async (req, res) => {
    try {
        let user = await User.findById(req.params.userId); // Utiliser await sans callback
        res.json(user);
    } catch (err) {
        res.send(err);
    }
};


// export const getUserWithID = async(req, res) => {
//     await User.findById(req.params.UserId, (err, User) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(User);
//     });
// }

export const updateUser = async (req, res) => {
    try {
        let user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true } // Utiliser await sans callback
        );
        res.json(user);
    } catch (err) {
        res.send(err);
    }
};
// export const updateUser = async(req, res) => {
//     await User.findOneAndUpdate({ _id: req.params.UserId}, req.body, { new: true }, (err, User) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(User);
//     })
// }

export const deleteUser = async (req, res) => {
    try {
        let user = await User.deleteOne({ _id: req.params.userId }); // Utiliser await sans callback
        res.json({ message: 'Successfully deleted User' });
    } catch (err) {
        res.send(err);
    }
};
// export const deleteUser = async(req, res) => {
//     await User.remove({ _id: req.params.UserId }, (err, User) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted User'});
//     })
// }