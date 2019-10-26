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
    console.log('hello')
    next()
}

module.exports={
    genToken,
    chkToken
}

