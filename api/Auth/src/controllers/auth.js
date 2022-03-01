const { JWT_SECRET } = process.env;

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
      next(err);
    } else {
      //respondo true si la firma del token es correcta
      res.status(200).json(true);
    }
  });
};

module.exports = auth;
