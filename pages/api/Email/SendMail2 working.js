import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { from, to, subject, text, attachment } = req.body;

      const transporter = nodemailer.createTransport({
        host: "us2.smtp.mailhostbox.com",
        port: 587,
        secure: false,
        auth: {
          user: "hr@asktek.net",
          pass: "Saima@99559#",
        },
      });

      const filePath = path.join(__dirname, "public", "uploads", attachment);
      const fileContent = fs.readFileSync(filePath);
      console.log("filePath", filePath);
      console.log("fileContent", fileContent);

      const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text,
        attachments: [
          {
            filename: attachment,
            content: fileContent,
          },
        ],
      };

      const info = await transporter.sendMail(mailOptions);

      console.log("Message sent: %s", info.messageId);

      res.status(200).json({ message: "Email sent successfully." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "An error occurred while sending email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
