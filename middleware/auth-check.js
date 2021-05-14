// first get the token from the header 
// then check if the token is valid or not
// and finali call next() 
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const EMAIL_SECRET = process.env.SECRET;

module.exports = function(req, res, next){
    if(req.method === 'OPTIONS'){
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return res.status(403).json({message: 'User is not authenticated'})
        }
        const decodedData = jwt.verify(token, EMAIL_SECRET)

        // req.user = decodedData
        next()
    }catch(e){
        console.log(e)
        res.status(403).json({message: 'User is not authorized'})
    }
}