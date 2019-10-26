const router = require('express').Router()

//Bring in the Routes
const authRouter = require('./auth/auth')

router.use('/',authRouter)


module.exports = router