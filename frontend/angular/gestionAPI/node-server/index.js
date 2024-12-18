import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import  JsonWebToken from 'jsonwebtoken';
import cors from 'cors';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb')
.then(() => {console.log('Connexion réussie à MongoDB');})
.catch((error) => console.error('Erreur de connexion à MongoDB:', error));
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//JWT setup
app.use((req, res, next)=>{
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT'){
        JsonWebToken.verify(req.headers.authorization.split(' ')[1],'RESTFULAPIs',(err, decode)=>{
            if(err) req.user=undefined;
            req.user=decode;
            next();
        });
    }else{
        req.user=undefined;
        next();
    }
});
routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);