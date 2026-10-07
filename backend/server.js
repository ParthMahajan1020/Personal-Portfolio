const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* ==========================================
   CONFIGURATION
========================================== */

const frontendUrl = (process.env.FRONTEND_URL || "")
  .trim()
  .replace(/\/+$/, "");

const allowedOrigins = [
  frontendUrl,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
].filter(Boolean);

console.log("Allowed CORS origins:", allowedOrigins);

/* ==========================================
   RESEND
========================================== */

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

/* ==========================================
   CORS
========================================== */

const corsOptions = {
  origin(origin, callback) {
    // Allow requests without an Origin header
    // such as direct browser/server requests.
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    console.error("❌ CORS blocked origin:", origin);

    return callback(new Error("Not allowed by CORS"));
  },

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: [
    "Content-Type",
    "Authorization",
  ],

  credentials: false,
};

// This handles normal requests AND OPTIONS preflight requests.
app.use(cors(corsOptions));

/* ==========================================
   BODY PARSER
========================================== */

app.use(express.json());

/* ==========================================
   HTML ESCAPE HELPER
========================================== */

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================
   CONTACT FORM
========================================== */

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    /* ----------------------------------------
       VALIDATION
    ---------------------------------------- */

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    /* ----------------------------------------
       EMAIL CONFIGURATION CHECK
    ---------------------------------------- */

    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
      console.error("❌ Email configuration is missing.");

      console.error({
        hasResendApiKey: Boolean(
          process.env.RESEND_API_KEY
        ),
        hasEmailTo: Boolean(
          process.env.EMAIL_TO
        ),
      });

      return res.status(500).json({
        success: false,
        message:
          "Email delivery is not configured on the server.",
      });
    }

    /* ----------------------------------------
       SANITIZE USER INPUT
    ---------------------------------------- */

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(
      /\n/g,
      "<br />"
    );

    /* ----------------------------------------
       SEND EMAIL THROUGH RESEND
    ---------------------------------------- */

    const { data, error } =
      await resend.emails.send({
        from: "Portfolio Backend <onboarding@resend.dev>",

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

            <!-- HEADER -->

            <div
              style="
                background: #071714;
                color: #f3f2ee;
                padding: 24px;
                border-radius: 12px;
                margin-bottom: 25px;
              "
            >
              <h1
                style="
                  margin: 0;
                  font-size: 24px;
                "
              >
                New Portfolio Message
              </h1>

              <p
                style="
                  margin: 8px 0 0;
                  color: #f3f2ee;
                  opacity: 0.65;
                "
              >
                Someone reached out through
                your portfolio.
              </p>
            </div>

            <!-- MESSAGE DETAILS -->

            <div
              style="
                background: #f3f2ee;
                padding: 24px;
                border-radius: 12px;
              "
            >

              <p>
                <strong>Name:</strong>
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong>
                ${safeEmail}
              </p>

              <p>
                <strong>Subject:</strong>
                ${safeSubject}
              </p>

              <div
                style="
                  margin-top: 25px;
                "
              >
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
                  ${safeMessage}
                </div>
              </div>

            </div>

            <!-- FOOTER -->

            <p
              style="
                margin-top: 25px;
                font-size: 12px;
                color: #777;
              "
            >
              Sent from Parth Mahajan's
              portfolio contact form.
            </p>

          </div>
        `,
      });

    /* ----------------------------------------
       RESEND ERROR
    ---------------------------------------- */

    if (error) {
      console.error("❌ Resend email error:");
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to send message. Please try again later.",
      });
    }

    /* ----------------------------------------
       SUCCESS
    ---------------------------------------- */

    console.log(
      "📩 Email sent successfully through Resend"
    );

    console.log(
      "Resend Email ID:",
      data?.id
    );

    return res.status(200).json({
      success: true,
      message:
        "Message sent successfully!",
    });
  } catch (error) {
    console.error(
      "❌ Failed to send email:"
    );

    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to send message. Please try again later.",
    });
  }
});

/* ==========================================
   HEALTH CHECK
========================================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message:
      "Portfolio backend is running.",
  });
});

/* ==========================================
   START SERVER
========================================== */

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `🚀 Backend running on port ${PORT}`
    );
  }
);