const router = require('express').Router()
const ErrorHandler = require('../middlewares/ErrorHandler')
const Controller = require('../controllers/Controller')

router.get('/', Controller.getAllTransaction)
router.get('/balance', Controller.getBalance)
router.post('/', Controller.createTransaction)
router.use(ErrorHandler)


module.exports = router