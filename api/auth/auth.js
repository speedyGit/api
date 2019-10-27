const router = require("express").Router();
const dbModel = require("./authModel");
const bcrypt = require("bcryptjs");
const jwt = require("./preAuth/jwtAccess");

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
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  console.log('usersfsre',user)
  dbModel
    .add(user)
    .then(newUser => {
      console.log('user', newUser)
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
  console.log(req.user)
  const user = req.user
    if(user && bcrypt.compareSync(password,user.password)){
      delete user.password
      payload = {
        ...newUser,
        token_type: "Basic ",
        token: jwt.genToken(newUser)
      }
      res.status(200).json({message:'Login Success'})
    } else {
      res.status(401).json({errors:[{password:'Invalid Username Or Password'}]});
    }
});

module.exports = router;
