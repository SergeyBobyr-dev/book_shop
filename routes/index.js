const Router = require('express')
const router = new Router()

const authRouter = require('./auth.router');
const booksRouter = require('./books.router');
const rolesRouter = require('./roles.router');


router.use("/auth", authRouter)
router.use("/roles", rolesRouter)
router.use("/books", booksRouter)

module.exports = router
