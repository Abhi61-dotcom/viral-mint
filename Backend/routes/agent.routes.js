const router = require("express").Router();

const { verifyUser, isAgent } = require("../middleware/auth");
const {
  getMyContacts,
  changePassword,
  getMe,
} = require("../controllers/agent.controller");

const { markAsCalled } = require("../controllers/admin.controller");

// PROTECTED AGENT ROUTE
router.get("/my-contacts", verifyUser, isAgent, getMyContacts);

// MARK CALLED
router.put("/contact/:id/called", verifyUser, isAgent, markAsCalled);

// 🔐 CHANGE PASSWORD (NEW)
router.put("/change-password", verifyUser, isAgent, changePassword);

// 🔥 GET LOGGED IN AGENT
router.get("/me", verifyUser, isAgent, getMe);

module.exports = router;
