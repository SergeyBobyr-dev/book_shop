
const users = require('../models').users;
const apis = require('../models').apis;
const roles = require('../models').roles;
const roles_apis = require('../models').roles_apis;

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();


const EMAIL_SECRET = process.env.SECRET;

class rolesController{

    async addRole(req, res){
        try{
            const { name, api_id } = req.body;
            const newRole = await roles.create({
                name, api_id
            })
            res.json(newRole)
        }catch(e){
            console.log(e);
        }
    }

    async addApi(req, res){
        try{
            const { name } = req.body;
            const newApi = await apis.create({
                name
            })
            res.json(newApi)
        }catch(e){
            console.log(e);
        }
    }

    async addActions(req, res){
        try{
            const { role_id, api_id } = req.body;
            const newActions = await roles_apis.create({
                role_id, api_id
            })
            res.json(newActions)

        }catch(e){
            console.log(e)
        }
    }

}

module.exports = new rolesController()