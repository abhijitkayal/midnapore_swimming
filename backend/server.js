import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// Fix __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public/uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// Upload API
app.post("/api/upload", upload.single("image"), (req, res) => {
  const host = req.get('host');
  const protocol = req.protocol;
  res.json({
    message: "Image uploaded successfully",
    imageUrl: `${protocol}://${host}/uploads/${req.file.filename}`,
  });
});

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Backend API is running" });
});

app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}

// Export for Vercel
export default app;
