const jwt = require("jsonwebtoken");
const Contact = require("../models/contact.model");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email, role: "admin" });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign(
      { userId: admin._id, role: "admin", name: admin.name },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    res.json({ message: "Admin login success ✅", role: "admin" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 📥 GET ALL CONTACTS
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .populate("assignedTo", "name email") // 🔥 ADD THIS
      .sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🗑️ DELETE CONTACT
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ MARK AS CALLED (NEW)
const markAsCalled = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { called: true },
      { new: true },
    );

    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🆕 CREATE AGENT (ADMIN ONLY)
const createAgent = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check existing
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Agent already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const agent = await User.create({
      name,
      email,
      password: hashedPassword,
      role: "agent",
    });

    res.json({
      message: "Agent created successfully ✅",
      agent: {
        _id: agent._id,
        name: agent.name,
        email: agent.email,
        role: agent.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 GET ALL AGENTS
const getAgents = async (req, res) => {
  try {
    const agents = await User.find({ role: "agent" }).select("-password");

    res.json(agents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🔥 ASSIGN AGENT TO CONTACT
const assignAgent = async (req, res) => {
  try {
    const { agentId } = req.body;

    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      { assignedTo: agentId },
      { new: true },
    ).populate("assignedTo", "name email");

    res.json({
      message: "Agent assigned ✅",
      updated,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete agent
const deleteAgent = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "Agent deleted successfully 🗑️" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update agent
const updateAgent = async (req, res) => {
  try {
    const { name, email } = req.body;

    await User.findByIdAndUpdate(req.params.id, {
      name,
      email,
    });

    res.json({ message: "Agent updated successfully ✏️" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// agent login
const agentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const agent = await User.findOne({ email, role: "agent" });
    if (!agent) {
      return res.status(401).json({ message: "Invalid agent ❌" });
    }

    const isMatch = await bcrypt.compare(password, agent.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Wrong password ❌" });
    }

    const token = jwt.sign(
      { userId: agent._id, role: "agent", name: agent.name },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.json({
      message: "Agent login success ✅",
      role: "agent",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// reset agent password
const resetAgentPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: "Min 6 chars required" });
    }

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Agent not found" });
    }

    // OPTIONAL: sirf agent ka hi password change ho
    if (user.role !== "agent") {
      return res.status(403).json({ message: "Only agent allowed" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();

    res.json({ message: "Password reset successfully ✅" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  adminLogin,
  getAllContacts,
  deleteContact,
  markAsCalled,
  createAgent,
  getAgents,
  assignAgent,
  deleteAgent,
  updateAgent,
  agentLogin,
  resetAgentPassword,
};
