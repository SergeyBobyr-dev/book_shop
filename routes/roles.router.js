const Router = require('express')
const router = new Router()
const rolesController = require('../controllers/roles.controller')
const authMiddleware = require('../middleware/auth-check')
const roleMiddleware = require('../middleware/role-check')



router.post('/addrole', roleMiddleware, rolesController.addRole)
router.post('/addapi', rolesController.addApi)
router.post('/addactions', rolesController.addActions)





module.exports = router