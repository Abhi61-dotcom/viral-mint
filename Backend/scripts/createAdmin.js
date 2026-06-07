const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");
require("dotenv").config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    const exists = await User.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    const hash = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    await User.create({
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: hash,
      role: "admin",
    });

    console.log("Admin created ✅");
    process.exit();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

createAdmin();