const { JWT_SECRET } = process.env;

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({error:"Invalid credentials"})
  jwt.verify(token, JWT_SECRET, (err, verifiedJwt) => {
    if (err) {
     return next(err);
    } else {
      //respondo true si la firma del token es correcta
      req.user=verifiedJwt.userId;
     return next();
    }
  });
};

module.exports = auth;
