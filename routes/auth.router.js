const Router = require('express')
const router = new Router()
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/auth-check')
const roleMiddleware = require('../middleware/role-check')



router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.get('/confirmation/:token',authController.authEmail)
router.get('/confirmation/mobile',authController.authMobile)
router.get('/users', authController.getUsers)




module.exports = router