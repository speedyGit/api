const router = require("express").Router();
const dbModel = require("./authModel");
const bcrypt = require("bcryptjs");
const jwt = require("./preAuth/jwtAccess");
const HashFactor = parseInt(process.env.HASH) || 8

//validation
const validateNewUser = require("./preAuth/validNewUser");
const validateLogin = require('./preAuth/loginUser')

router.get("/", (req, res) => {
  dbModel
    .findAll()
    .then(users => res.status(200).json({ message: "success", ...users }))
    .catch(err => {
      res.status(400).json({ errors: err });
    });
});

router.post("/register", validateNewUser, (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, HashFactor);
  user.password = hash;
  dbModel
    .add(user)
    .then(newUser => {
      //Just to Besure
      delete newUser.password;
      payload = {
        ...newUser,
        token_type: "Basic ",
        token: jwt.genToken(newUser)
      };
      res.status(201).send({ message: "Welcome da the Club Yo!", ...payload });
    })
    .catch(err => res.status(400).json({ errors: [err] }));
});

router.post("/login", validateLogin, (req, res) => {
  const {password} = req.body
  const user = req.user
    if(user && bcrypt.compareSync(password,user.password)){
      delete user.password
      payload = {
        ...user,
        token_type: "Basic ",
        token: jwt.genToken(user)
      }
      res.status(200).json({message:'Login Success',...payload})
    } else {
      res.status(401).json({errors:[{password:'Invalid Username Or Password'}]});
    }
});

module.exports = router;
