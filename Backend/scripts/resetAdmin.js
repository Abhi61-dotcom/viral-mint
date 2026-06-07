require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const resetAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    const hash = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    const updatedUser = await User.findOneAndUpdate(
      { email: process.env.ADMIN_EMAIL },
      { password: hash },
      { returnDocument: "after" }
    );

    if (!updatedUser) {
      console.log("Admin not found ❌");
    } else {
      console.log("Admin password updated ✅");
    }

    process.exit();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

resetAdmin();