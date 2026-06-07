const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const router = require("./routes/admin.routes");
const contactRoutes = require("./routes/contact.routes");
const authRoutes = require("./routes/auth.routes");
const agentRoutes = require("./routes/agent.routes");

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "https://viral-mint-two.vercel.app",
    credentials: true,
  })
);

//  ROUTES
app.use("/api/admin", router);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/agent", agentRoutes);

// AUTH CHECK
const jwt = require("jsonwebtoken");

app.get("/api/auth/me", (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    res.json({
      role: decoded.role,
      name: decoded.name || "",
      id: decoded.id || "",
    });
  } catch {
    res.status(401).json({});
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
