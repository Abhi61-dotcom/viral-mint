const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
};

//  ADMIN CHECK
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin only" });
  }
  next();
};

//  AGENT CHECK
const isAgent = (req, res, next) => {
  if (req.user.role !== "agent") {
    return res.status(403).json({ message: "Agent only" });
  }
  next();
};

module.exports = { verifyUser, isAdmin, isAgent };
