module.exports = (req, res, next) => {
  function validateLogin(user) {
    const user = req.body;
    const errors = [];

    !u.username && errors.push({ username: "required" });
    !u.password && errors.push({ password: "required" });

    Object.keys(user).map(x => {
      if (x === "password" || x === "username") {
        const key = u[x].length;

        //Verifiy Length Min
        if (key < 5 && x) {
          errors.push({ [x]: "Must be a minimum of 5 chars" });
        }

        //Verifiy Length Max
        if (key > 50 && x) {
          errors.push({ [x]: "Must be a maximum of 50 chars" });
        }
      } else {
        //Why except dirty keys
        errors.push({ error: `Unexpected key: [${x}] provide` });
      }
    })
  }

  validateLogin(req.body)
  errors.length < 1 ? next() : res.status(401).json({ errors: errors });
};
