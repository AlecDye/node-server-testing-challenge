const router = require("express").Router();

const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", (req, res) => {
  const userInfo = req.body;
  Users.add(userInfo)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
