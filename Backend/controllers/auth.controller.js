const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: "Invalid" });

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
      name: user.name,
    },
    process.env.JWT_SECRET, 
    { expiresIn: "7d" },
  );

  res.cookie("token", token, { httpOnly: true });

  res.json({
    role: user.role,
    name: user.name,
  });
};

module.exports = { login };
