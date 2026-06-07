const jwt = require("jsonwebtoken");

const genToken = (user) => {
  try {
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "2d",
      }
    );

    console.log("TOKEN:", token);
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = genToken;