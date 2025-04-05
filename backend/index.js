// 1️⃣ IMPORTS
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // ← Required for MongoDB

// 2️⃣ APP SETUP
const app = express();
const PORT = 5000;

// 3️⃣ MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

// ✅ 4️⃣ MONGODB CONNECTION
mongoose
  .connect("mongodb://localhost:27017/contactFormDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ✅ 5️⃣ MONGOOSE SCHEMA & MODEL (Step 4)
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ 6️⃣ ROUTE TO SAVE FORM DATA
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    console.log("✅ Form data saved to DB");
    res.status(200).json({ message: "Saved to DB" });
  } catch (error) {
    console.error("❌ Failed to save data", error);
    res.status(500).json({ message: "Failed to save data" });
  }
});

// 7️⃣ SERVER START
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
