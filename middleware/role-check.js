// first get user id
// find the role of that user
// find the Role id 
// user the api name, and go to db and find api id
// go to last table: User_actions and see if this role id matches the api id


const jwt = require('jsonwebtoken');
const users = require('../models').users;
const roles_apis = require('../models').roles_apis;
const roles = require('../models').roles;
const apis = require('../models').apis;
const dotenv = require('dotenv');
dotenv.config();

const EMAIL_SECRET = process.env.SECRET;

module.exports = async function(req, res, next) {
    
        if(req.method === 'OPTIONS'){
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1]
            if(!token){
                return res.status(403).json({message: 'User is not authenticated'})
            }
            const userId = jwt.verify(token, EMAIL_SECRET).id
            const {role_name: roleName} = await users.findOne({
                where: { id: userId }
            })
            
            const {id: roleId} = await roles.findOne({
                where: { name: roleName }
            })


           const {id: currentApiId} = await apis.findOne({
                where: { name: req.url }
            })
            const validate = await roles_apis.findOne({ 
                where:{ role_id: roleId, api_id: currentApiId}
            })
            if(validate){
                res.status(200)
                next()
            }else{
                res.status(403).json({message: "Access denied"})
                }
            // let userApisArr = []
            // await roles_apis.findAll({
            //     where: { role_id: roleId,

            //     }
            // }).then(projects => {
            //     for ( let i = 0; i < projects.length; i++ ) {
            //         userApisArr.push(projects[i].dataValues.api_id)
            //         }
            // //  console.log('WWWW', userApisArr)
            //   })
            
            
            // if( userApisArr.includes ( currentApiId )){
            //     res.status(200)
            //     next()
            // }else{
            //     res.status(403).json({message: "Access denied"})
            // }
            
            
        }catch(e){
            console.log(e)
            res.status(403).json({message: 'User is not authorized'})
        }
}