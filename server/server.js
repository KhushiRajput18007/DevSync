import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import errorMiddleware from "./middlewares/errorMiddleware.js";

// Import Routes


// Load environment variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/debugger", debuggerRoutes);
app.use("/api/journal", journalRoutes);
app.use("/api/learning", learningRoutes);
app.use("/api/resume", resumeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Global Error Handling Middleware
app.use(errorMiddleware);

// Define Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});



