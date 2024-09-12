// In your server.js or routes/auth.js (wherever you define routes)
const express = require("express");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Your login route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  // Simple authentication logic (example)
  if (email === "test@example.com" && password === "password123") {
    // If login is successful
    return res
      .status(200)
      .json({ msg: "Login successful", token: "fake-jwt-token" });
  } else {
    // If login fails
    return res.status(400).json({ msg: "Invalid credentials" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
