const router = require('express').Router()
const jwt = require(_jwt)
//Bring in the routes
const slRouter = require('./sls/sls')
const tlRouter = require('./tls/tls')

router.use('/sls',jwt.chkRole('SL'),slRouter)
router.use('/tls',tlRouter)

module.exports=router;


// SO, We have here a fork in the road, Should I verify token