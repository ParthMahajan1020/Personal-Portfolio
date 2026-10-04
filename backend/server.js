const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigin =
  process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: allowedOrigin,
  })
);

app.use(express.json());


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Check email configuration
transporter.verify((error) => {
  if (error) {
    console.error("❌ Email configuration error:");
    console.error(error.message);
  } else {
    console.log("✅ Gmail transporter is ready");
  }
});



app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields.",
      });
    }

    // Send email to Parth

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f9f9f9; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.05); overflow: hidden;">
                
                <!-- Header -->
                <tr>
                  <td style="background-color: #071714; padding: 30px 40px; text-align: center;">
                    <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: 0.5px;">New Portfolio Message</h1>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding: 40px;">
                    
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding-bottom: 16px;">
                          <span style="font-size: 12px; text-transform: uppercase; color: #888888; font-weight: 700; letter-spacing: 1px;">Sender Details</span><br>
                          <div style="margin-top: 6px; font-size: 16px; color: #071714; font-weight: 500;">${name}</div>
                          <a href="mailto:${email}" style="font-size: 15px; color: #0066cc; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 24px; border-bottom: 1px solid #eeeeee;">
                          <span style="font-size: 12px; text-transform: uppercase; color: #888888; font-weight: 700; letter-spacing: 1px;">Subject</span><br>
                          <div style="margin-top: 6px; font-size: 16px; color: #071714; font-weight: 500;">${subject}</div>
                        </td>
                      </tr>
                    </table>

                    <div style="font-size: 12px; text-transform: uppercase; color: #888888; font-weight: 700; letter-spacing: 1px; margin-bottom: 12px;">Message</div>
                    
                    <!-- Message Content -->
                    <div style="background-color: #f3f2ee; padding: 24px; border-left: 4px solid #071714; border-radius: 0 4px 4px 0; font-size: 15px; line-height: 1.6; color: #222222;">
                      ${message.replace(/\n/g, "<br />")}
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #f4f7f6; padding: 20px 40px; text-align: center; border-top: 1px solid #eeeeee;">
                    <p style="margin: 0; font-size: 13px; color: #999999;">
                      This message was automatically sent from your portfolio contact form.
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `,
    });


    console.log(`📩 Contact message received from ${email}`);

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


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running.",
  });
});


app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});