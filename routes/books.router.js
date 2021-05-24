const Router = require('express')
const router = new Router()
const booksController = require('../controllers/books.controller')
const authMiddleware = require('../middleware/auth-check')
const roleMiddleware = require('../middleware/role-check')


router.post('/addbook', booksController.addBook)
router.get('/getbooks', booksController.getBooks)
router.post('/editbook', booksController.editBook)
router.post('/removebook/:id', booksController.removeBook)

router.post('/addcategories', booksController.addCategories)
router.post('/addtype', booksController.addType)



module.exports = router