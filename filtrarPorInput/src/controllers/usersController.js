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
      { id: 1, name: "Alberto" },
      { id: 2, name: "Daniel" },
      { id: 3, name: "Ranno" },
    ];
    res.render("users/userList", { users: users });
  },
  search: (req, res) => {
    let loQueBuscoElUsuario = req.query.search;
    let users = [
      { id: 1, name: "Alberto" },
      { id: 2, name: "Daniel" },
      { id: 3, name: "Ranno" },
    ];
    let usersResults = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].name.includes(loQueBuscoElUsuario)) {
        usersResults.push(users[i]);
      }
    }
    res.status(200).render("users/userResults", { usersResults: usersResults });
  },
};

module.exports = usersController;
