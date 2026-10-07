const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

const allowedOrigin =
  process.env.FRONTEND_URL || "http://localhost:5173";

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(
  cors({
    origin: allowedOrigin,
  })
);

app.use(express.json());


// ==========================================
// CONTACT FORM
// ==========================================

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Send email through Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.EMAIL_TO],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,

      html: `
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #071714;
            max-width: 700px;
            margin: 0 auto;
            padding: 30px;
          "
        >

          <div
            style="
              background: #071714;
              color: #f3f2ee;
              padding: 24px;
              border-radius: 12px;
              margin-bottom: 25px;
            "
          >
            <h1 style="margin: 0; font-size: 24px;">
              New Portfolio Message
            </h1>

            <p
              style="
                margin: 8px 0 0;
                color: #f3f2ee;
                opacity: 0.65;
              "
            >
              Someone reached out through your portfolio.
            </p>
          </div>

          <div
            style="
              background: #f3f2ee;
              padding: 24px;
              border-radius: 12px;
            "
          >

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Subject:</strong>
              ${subject}
            </p>

            <div style="margin-top: 25px;">

              <p>
                <strong>Message:</strong>
              </p>

              <div
                style="
                  background: #ffffff;
                  padding: 18px;
                  border-left: 4px solid #071714;
                  border-radius: 4px;
                "
              >
                ${message.replace(/\n/g, "<br />")}
              </div>

            </div>

          </div>

          <p
            style="
              margin-top: 25px;
              font-size: 12px;
              color: #777;
            "
          >
            Sent from Parth Mahajan's portfolio contact form.
          </p>

        </div>
      `,
    });

    // Handle Resend error
    if (error) {
      console.error("❌ Resend email error:");
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    }

    console.log("📩 Email sent successfully through Resend");
    console.log("Resend Email ID:", data?.id);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("❌ Failed to send email:");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});


// ==========================================
// HEALTH CHECK
// ==========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running.",
  });
});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});