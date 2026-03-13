import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.set("trust proxy", true);

const configuredOrigins = (process.env.FRONTEND_URL || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const vercelFrontendUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
  ...configuredOrigins,
  vercelFrontendUrl,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      // Allow non-browser requests and same-origin server calls
      if (!origin) return callback(null, true);

      const isPreview = /\.vercel\.app$/.test(origin);
      if (allowedOrigins.includes(origin) || isPreview) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ message: "Backend API is running" });
});

app.get("/api", (_req, res) => {
  res.status(200).json({ message: "API is working" });
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    environment: process.env.VERCEL ? "vercel" : "local",
  });
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      error: "name and email are required",
    });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailTo = process.env.EMAIL_TO || emailUser;

  if (!emailUser || !emailPass) {
    return res.status(500).json({
      success: false,
      error: "Email service is not configured on server",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: emailUser,
      replyTo: email,
      to: emailTo,
      subject: "New Contact Message",
      html: `
        <h2>Contact Form Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Send email error:", error);
    return res.status(500).json({
      success: false,
      error: process.env.NODE_ENV === "production"
        ? "Failed to send email"
        : error instanceof Error
          ? error.message
          : "Failed to send email",
    });
  }
});

app.use((error, _req, res, _next) => {
  console.error("Server error:", error);

  if (error?.message === "Not allowed by CORS") {
    return res.status(403).json({ success: false, error: error.message });
  }

  return res.status(500).json({ success: false, error: "Internal server error" });
});

if (!process.env.VERCEL && !process.env.NETLIFY) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
  });
}

export default app;
