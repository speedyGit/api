const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = {
  genToken,
  chkToken
};

//Creates a new JWT Token
function genToken(user) {
  const payload = {
    tokenType: "Basic ",
    ...user
  };

  const options = {
    expiresIn: "7d"
  };

  return jwt.sign(payload, secret, options);
}

//Verifies Existing Role and JWT token
function chkToken(role = null) {
  role && console.log(role);
  return (req, res, next) => {
    const token = req.headers.authorization;
    //TOKEN
    token &&
      jwt.verify(token, secret, async (err, decoded) => {
        if (err) {
          //Needs Time Validation
          res.status(401).json({ error: "Invalid Token",err });
        } else {
          req.user = decoded;
          next();
        }
      });
    //No Token, No Pass
    !token && res.status(401).json({ error: "No Token Provided" });
  };
}
