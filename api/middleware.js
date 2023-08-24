function logger(req, res, next) {
  const timestamp = new Date().toLocaleString();
  console.log(req.method, req.url, timestamp);
  next();
}

function validateUser(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(422).json({ message: "Please enter a username and password" });
  } else {
    next();
  }
}

module.exports = {
  logger,
  validateUser,
};
