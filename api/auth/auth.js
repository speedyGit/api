const router = require("express").Router();
const dbModel = require("./authModel");
const bcrypt = require("bcryptjs");
const jwt = require("./preAuth/jwtAccess");

//validation
const validateNewUser = require("./preAuth/validNewUser");

router.get("/", jwt.chkToken(), (req, res) => {
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

router.post("/login", (req, res) => {});

module.exports = router;
