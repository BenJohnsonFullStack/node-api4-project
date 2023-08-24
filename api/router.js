const express = require("express");
const { validateUser } = require("./middleware");

const router = express.Router();

router.get("/users", (req, res) => {
  res.json([
    { username: "Ben Johnson", password: "ilikedogs" },
    { username: "Donnie Darko", password: "helikesmurder" },
  ]);
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.status(201).json({ username: username, password: password });
});

router.post("/login", validateUser, (req, res) => {
  const { username } = req.body;
  res.json({ message: `Welcome, ${username}` });
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: "Could not reach the server",
  });
});

module.exports = router;
