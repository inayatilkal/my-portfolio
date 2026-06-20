import axios from "axios";

export const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const htmlContent = `
      <div style="
        background:#020617;
        padding:10px;
        font-family:Arial,sans-serif;
      ">
        <div style="
          max-width:700px;
          margin:auto;
          background:#0f172a;
          border-radius:24px;
          overflow:hidden;
          border:1px solid #1e293b;
        ">

          <!-- Header -->
          <div style="
            background:linear-gradient(135deg,#2563eb,#7c3aed);
            padding:20px;
            text-align:center;
          ">
            <h1 style="
              color:white;
              margin:0;
              font-size:28px;
            ">
              🚀 Message From Your Portfolio Website...
            </h1>

            <p style="
              color:#dbeafe;
              margin-top:10px;
            ">
              Someone contacted you through your portfolio website
            </p>
          </div>

          <!-- Body -->
          <div style="padding:35px;">

            <div style="
              background:#111827;
              border:1px solid #334155;
              border-radius:18px;
              padding:24px;
              margin-bottom:20px;
            ">
              <h2 style="
                color:#60a5fa;
                margin-top:0;
              ">
                👤 Contact Details
              </h2>

              <p style="
                color:#e2e8f0;
                font-size:16px;
              ">
                <strong>Name:</strong>
                ${name}
              </p>

              <p style="
                color:#e2e8f0;
                font-size:16px;
              ">
                <strong>Email:</strong>
                ${email}
              </p>
            </div>

            <div style="
              background:#111827;
              border:1px solid #334155;
              border-radius:18px;
              padding:24px;
            ">
              <h2 style="
                color:#a78bfa;
                margin-top:0;
              ">
                💬 Message
              </h2>

              <p style="
                color:#e2e8f0;
                line-height:1.8;
                white-space:pre-line;
              ">
                ${message}
              </p>
            </div>

          </div>

          <!-- Footer -->
          <div style="
            border-top:1px solid #1e293b;
            text-align:center;
            padding:24px;
          ">
            <p style="
              color:#64748b;
              margin:0;
            ">
              Sent from Portfolio Website
            </p>

            <p style="
              color:#94a3b8;
              margin-top:8px;
            ">
              © 2026 Inayat Ahemed Ilkal
            </p>
          </div>

        </div>
      </div>
    `;

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Portfolio Contact",
          email: process.env.EMAIL_TO,
        },

        to: [
          {
            email: process.env.EMAIL_TO,
          },
        ],

        replyTo: {
          email,
          name,
        },

        subject: `🚀 Message from: ${name}`,

        htmlContent,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      },
    );

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("FULL ERROR:", error.response?.data || error.message);

    return res.status(500).json({
      error: "Failed to send email",
    });
  }
};
