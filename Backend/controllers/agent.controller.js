const bcrypt = require("bcryptjs");
const Contact = require("../models/contact.model");
const User = require("../models/user.model");

// EXISTING
const getMyContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({
      assignedTo: req.user.userId,
    }).sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CHANGE PASSWORD
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Wrong current password ❌" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Min 6 characters required" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password updated successfully ✅" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  GET LOGGED IN AGENT
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("name email role");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMyContacts,
  changePassword,
  getMe, 
};
