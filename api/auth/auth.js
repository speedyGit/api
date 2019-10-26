const router = require('express').Router()
const dbModel = require('./authModel')
const auth = require('./preAuth/jwtAccess')

router.get('/',auth.chkToken,(req,res)=>{
    res.status(200).json({message:'success'})
})

module.exports=router
