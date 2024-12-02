// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const protect =  (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; // Bearer token
// const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Not authorized, no token" });
  }

  try {
    const decoded =  jwt.verify(token, process.env.SECRET_TOKEN);
    req.userId = decoded.id;
    // console.log("this is user id:  ",req.userId)
    // console.log(decoded)

    next();
  } catch (error) {
    res.status(401).json({ error: "Not authorized, invalid token", error });
  }
};
