const bcrypt = require('bcryptjs');
const users = require('../models').users;
const roles = require('../models').roles;
const jwt = require('jsonwebtoken');
const mailer = require('../nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const admin = require('firebase-admin');

var serviceAccount = require("../bookshop-8d128-firebase-adminsdk-w8trs-dc965c8490.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const EMAIL_SECRET = process.env.SECRET;

const generateAccessToken = function(id){
    const payload = {
        id
    };
    return jwt.sign(payload, EMAIL_SECRET, { expiresIn: "24h"})
}

let addUserDb = async function(uid){
    const checkId = await users.findOne({
        where: { id: uid }
    })

    if (checkId) {
        await users.update({ active: true }, { where: { id: uid } })
        return res.status(200).send("user authenticated")
    }
}

class authController {

    async registration(req, res) {
        try {
            const { full_name, phone_number, email, role_name, password, age, address, cc } = req.body;

            const checkPhone = await users.findOne({
                where: { phone_number }
            })

            const checkEmail = await users.findOne({
                where: { email }
            })

            const errors = {};


            if (checkPhone) {
                errors.phone = {};
                errors.phone.message = 'User with such phone number already exists';
            }
            if (checkEmail) {
                errors.email = {};
                errors.email.message = 'User with such email address already exists';
            }
            if (Object.keys(errors).length > 0) {
                return res.status(400).json({ data: { errors } });
            }


            const hashPassword = bcrypt.hashSync(req.body.password, 7);
            const hashCc = bcrypt.hashSync(req.body.cc, 7);

            const newPerson = await users.create({
                full_name, phone_number, email, role_name, password: hashPassword, age, address, cc: hashCc
            })

            const token = jwt.sign({ id: newPerson.id }, EMAIL_SECRET)

            const message = {
                from: '"Book keeping" <verda.christiansen22@ethereal.email>',
                to: req.body.email,
                subject: "Confirm email",
                text: `http://localhost:3000/confirmation/${token}`
            }

            mailer(message)

            console.log(token)

            res.json(newPerson)


        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Registration error' })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            const user = await users.findOne({
                where: { email: email }
            })


            if(!user){
                return res.status(400).json({ message: 'User not found' })
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if(!validPassword){
                return res.status(400).json({ message: 'Wrong password' })
            }
            
            const token = generateAccessToken(user.id)

            return res.json({token})

        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Login error' })
        }
    }

    async authEmail(req, res) {

        try {
            const decodedId = jwt.verify(req.params.token, EMAIL_SECRET).id

            const checkId = await users.findOne({
                where: { id: decodedId }
            })


            if (checkId) {
                await users.update({ active: true }, { where: { id: decodedId } })
                return res.status(200).send("user authenticated")
            }

            res.json("works")
        } catch (e) {
            console.log(e)
            res.status(400).json(e.message)
        }
    }

    async authMobile(req, res) {

        try {
            let idToken = req.body.token
            admin
                .auth()
                .verifyIdToken(idToken)
                .then((decodedToken) => {
                    const uid = decodedToken.uid;
                    addUserDb(uid)
                })
                .catch((error) => {
                    console.log(error)
                });

        } catch (e) {
            console.log(e)
            res.status(400).json(e.message)
        }
    }

    async getUsers(req, res) {

        try {
            const allUser = await users.findAll()
            res.json(allUser)
        } catch (e) {
            console.log(e)
            res.status(400).json(e.message)
        }
    }
}

module.exports = new authController()