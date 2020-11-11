const User = require("../models/User");
const authenticationService = require("../services/authenticationService");
const userService = require("../services/userService");

module.exports = (app) => {
  app.post("/user/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findByCredentials(email, password);
      if (!user) {
        return res
          .status(401)
          .send({ error: "Login failed! Check authentication credentials" });
      }

      const token = await authenticationService.generateAuthToken(user);

      res.send({ user, token });
    } catch (error) {
      console.log("error---------> " + error);
      res.status(400).send({ error: error.message });
    }
  });

  app.post("/user", async (req, res) => {
    try {
      const userCreated = await userService.createUser(req);
      res.send({ userCreated });
    } catch (error) {
      console.log("error---------> " + error);
      res.status(400).send({ error: error.message });
    }
  });

  app.get("/user/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
