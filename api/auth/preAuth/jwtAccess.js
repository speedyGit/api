const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET

//Creates a new JWT Token
function genToken(user){
    const payload = {...user}
    const options ={
        expiresIn:'7d'
    }
    return jwt.sign(payload,secret,options)
}

//Verifies Existing JWT token
const chkToken = (req,res,next) =>{
    const token = req.headers.authorization
    token && jwt.verify(token,secret,(err,decoded)=>{
        if(err){
            res.status(401).json({error:"Invalid Token"})
        }else{
            req.user = decoded;
            next()
        }
    })

    !token && res.status(401).json({error:'No Token Provided'}) 
   
}

module.exports={
    genToken,
    chkToken
}

