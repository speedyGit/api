const router = require('express').Router()

//Auth Validator
const jwt = require(_jwt)

//Bring in the Routes
const authRouter = require('./auth/auth')
const privateRouter = require('./private/server')

router.use('/',authRouter)
router.use('/private',jwt.chkToken(),privateRouter)

module.exports = router