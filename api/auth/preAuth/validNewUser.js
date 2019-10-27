const dbMode = require("../authModel");
module.exports = async (req, res, next) => {
  const errors = [];

  function validateNewUser(user) {
    const u = user;
    !u.username && errors.push({ username: "required" });
    !u.password && errors.push({ password: "required" });
    !u.email && errors.push({ email: "required" });
    !u.accessKey && errors.push({ accessKey: "required" });

    //Validate Char Length
    Object.keys(user).map(x => {
      if (
        x === "password" ||
        x === "username" ||
        x === "accessKey"||
        x === "email"
      ) {
        const key = u[x].length;

        //Verifiy Length Min
        if (key < 5 && x) {
          errors.push({ [x]: "Must be a minimum of 5 chars" });
        }

        //Verifiy Length Max
        if (key > 50 && x) {
          errors.push({ [x]: "Must be a maximum of 50 chars" });
        }

        //Validate Email Pattern
        if (x === "email") {
          //Cats got your keyboard... When in dbout, Reg it out
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(u[x]) &&
            errors.push({ error: "Unexpected Eamil Address" });
        }

        //ASSIGN ROLE BASED ON ACCESS TOKEN
        if (x === "accessKey") {
          req.body.role_id =
            u[x] === "fgdewegfbdgdrertfgdfgdrgwt" //SL
              ? 1 //Assigns Role SL
              : u[x] === "0u8u2rfjp8au71309" //TL
              ? 2 //Assigns Role TL
              : errors.push({ error: "Unknown Access Key" });
          delete u[x];
        }
      } else {
        //Why except dirty keys
        errors.push({ error: `Unexpected key: [${x}] provide` });
      }
    });
  }

  validateNewUser(req.body);
  //Does the user exist?
  if (!errors.length) {
    await dbMode
      .findByName(req.body.username)
      .then(
        user => user && errors.push({ username: "Username Already Exists" })
      );
    await dbMode
      .findByEmail(req.body.email)
      .then(
        email => email && errors.push({ email:"Email Already Exists" })
      );
  }
  //OK We are probably safe to move on
  errors.length < 1 ? next() : res.status(401).json({ errors: errors });
};
