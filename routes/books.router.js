const Router = require('express')
const router = new Router()
const booksController = require('../controllers/books.controller')
const authMiddleware = require('../middleware/auth-check')
const roleMiddleware = require('../middleware/role-check')


router.post('/addrole', booksController.addBook)



module.exports = router