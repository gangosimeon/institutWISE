import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = async (req, res) => {
    try {
        let newContact = new Contact(req.body);
        let contact = await newContact.save(); // Utiliser await sans callback
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
};
// export const addNewContact = async(req, res) => {
//     let newContact =await new Contact(req.body);

//     newContact.save((err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// };

export const getContacts = async (req, res) => {
    try {
        let contacts = await Contact.find({}); // Utiliser await sans callback
        res.json(contacts);
    } catch (err) {
        res.send(err);
    }
};
// export const getContacts = async(req, res) => {
//     await Contact.find({}, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// };


export const getContactWithID = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.contactId); // Utiliser await sans callback
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
};
// export const getContactWithID = async(req, res) => {
//     await Contact.findById(req.params.contactId, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     });
// }

export const updateContact = async (req, res) => {
    try {
        let contact = await Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true } // Utiliser await sans callback
        );
        res.json(contact);
    } catch (err) {
        res.send(err);
    }
};
// export const updateContact = async(req, res) => {
//     await Contact.findOneAndUpdate({ _id: req.params.contactId}, req.body, { new: true }, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json(contact);
//     })
// }

export const deleteContact = async (req, res) => {
    try {
        let contact = await Contact.deleteOne({ _id: req.params.contactId }); // Utiliser await sans callback
        res.json({ message: 'Successfully deleted contact' });
    } catch (err) {
        res.send(err);
    }
};
// export const deleteContact = async(req, res) => {
//     await Contact.remove({ _id: req.params.contactId }, (err, contact) => {
//         if (err) {
//             res.send(err);
//         }
//         res.json({ message: 'Successfully deleted contact'});
//     })
// }