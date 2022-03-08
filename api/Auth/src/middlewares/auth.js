const { JWT_SECRET } = process.env;

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(200).json({error:"Invalid credentials"})
  jwt.verify(token, JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
     return res.status(200).json({error:"Invalid token"})
    } else {
      req.user=verifiedJwt.userId;
     return next();
    }
  });
};

module.exports = auth;
