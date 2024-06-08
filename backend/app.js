import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import multer from "multer"; // Import Multer

import authRoutes from "./routes/AuthRoutes.js";
import uploadRoutes from "./routes/FileUploadRoute.js";
import dashboardRoutes from "./routes/DashboardRoutes.js";

import connectingDatabase from "./database/Connect.js";

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
const port = process.env.PORT || 5000;

// Configure Multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Change 'uploads/' to your desired upload directory

authRoutes.use(bodyParser.json());
authRoutes.use(bodyParser.urlencoded({ extended: true }));

// JWT
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api", authRoutes);

// File upload route (use Multer middleware)
app.post("/api/upload", upload.single("file"), (req, res) => {
  // Handle file upload here
  // Multer stores the uploaded file in req.file
  console.log(req.file); // Example: { fieldname: 'file', originalname: 'example.jpg', encoding: '7bit', mimetype: 'image/jpeg', destination: 'uploads/', filename: 'af2b6e5c75c6f29ff220b2e8a3b98a5c', path: 'uploads/af2b6e5c75c6f29ff220b2e8a3b98a5c', size: 84866 }
  res.send("File uploaded successfully");
});

app.use("/api", dashboardRoutes);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
