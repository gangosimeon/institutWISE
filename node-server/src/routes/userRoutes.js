import { 
    addNewUser, 
    getUsers, 
    getUserWithID, 
    updateUser,
    deleteUser 
} from '../controllers/userController';
import { getCredentialUsers } from '../controllers/credentialController';

import { login,register,loginRequired } from '../controllers/credentialController';
const routes = (app) => {
    app.route('/user')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getUsers)
    
    // POST endpoint
    .post(addNewUser);

    app.route('/user/:userId')
    // get specific User
    .get(getUserWithID)
    
    // put request
    .put(updateUser)

    // delete request
    .delete(deleteUser);

    //register and login routes
    app.route('/auth/register')
    .post(register)

    .get(getCredentialUsers)
    
    app.route('/auth/login')
    .post(login)
}

export default routes;
