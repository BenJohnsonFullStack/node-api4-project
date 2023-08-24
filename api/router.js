const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ message: "hello from express" });
});

module.exports = router;
