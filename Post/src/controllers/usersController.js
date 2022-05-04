const res = require("express/lib/response");

const usersController = {
  login: (req, res) => {
    res.status(200).render("users/login");
  },
  register: (req, res) => {
    res.status(200).render("users/register");
  },
  list: (req, res) => {
    let users = [
      { id: 1, name: "Fernando" },
      { id: 2, name: "Daniel" },
      { id: 3, name: "Leandro" },
    ];
    res.render("users/userList", { users: users });
  },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.search;
    let users = [
      { id: 1, name: "Fernando" },
      { id: 2, name: "Daniel" },
      { id: 3, name: "Leandro" },
    ];
    let usersResults = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].name.includes(loQueBuscoElUsuario)) {
        usersResults.push(users[i]);
      }
    }
    res.status(200).render("users/userResults", { usersResults: usersResults });
  },
  create: (req, res) => {
    //console.log(req.body)
    //res.send(req.body.nombre)
    let usuario = {
      nombre: req.body.nombre,
      edad: req.body.edad,
      email: req.body.email,
    };
    //res.send(usuario) //Aun Falta Guardar la información, pero guardada o no, lo redirijo a la lista
    res.redirect("/users/list");
  }, 
};

module.exports = usersController;
