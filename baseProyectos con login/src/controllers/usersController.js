const usersController = {
  login: (req, res) => {
    console.log("Login");
    res.status(200).render("users/login");
  },
  
  processLogin: (req, res) => {
    console.log("Process Login")
    console.log(req.body)
    const body = req.body;
    if (body.user == "admin" && body.password == "admin") {
      req.session.userinformation = {
        username: body.user,
        userpassword: body.password,
      };
      res.redirect("portal");
    } else {
      res.send("Autenticación errada");
    }
  },
  portal: (req, res) => {
    console.log("portal");
    res.status(200).render("users/portal");
  },
};

module.exports = usersController;
