const router = require("express").Router();

const { verifyUser, isAdmin } = require("../middleware/auth.js");

const {
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
} = require("../controllers/admin.controller");

// login
router.post("/login", adminLogin);

// agent login
router.post("/agent-login", agentLogin);

// ✅ LOGOUT
router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({ message: "Logout success" });
});

// 🔒 ADMIN PROTECTED ROUTES
router.get("/contacts", verifyUser, isAdmin, getAllContacts);
router.delete("/contact/:id", verifyUser, isAdmin, deleteContact);
router.put("/contact/:id/called", verifyUser, isAdmin, markAsCalled);

router.get("/agents", verifyUser, isAdmin, getAgents);
router.put("/contact/:id/assign", verifyUser, isAdmin, assignAgent);

router.delete("/agent/:id", verifyUser, isAdmin, deleteAgent);
router.put("/agent/:id", verifyUser, isAdmin, updateAgent);

router.post("/create-agent", verifyUser, isAdmin, createAgent);

// 🔐 RESET AGENT PASSWORD
router.put("/agent/:id/reset-password", verifyUser, isAdmin, resetAgentPassword);

module.exports = router;
