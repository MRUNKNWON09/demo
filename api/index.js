const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
  const { email, subject, message } = req.query;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: "Missing parameters." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "you.are.hacked097@gmail.com",
      pass: "djls vrzw zips brra",
    },
  });

  const mailOptions = {
    from: "you.are.hacked097@gmail.com",
    to: email,
    subject: subject,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "✅ Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: "❌ Failed to send email", detail: error.message });
  }
};
