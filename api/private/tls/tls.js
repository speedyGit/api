const router = require('express').Router()
const dbModel = require('./tlModel')

//Gets all Students by TL
router
  .get('/',(req,res)=>{
    return dbModel.findAll(req.user.id)
    .then(p=>{res.status(200).json({message:'Success',students:[...p]})})
    .catch(e=>{res.status(404).json({message:'SOMEMESSAGE', ...e})})
})
module.exports=router
