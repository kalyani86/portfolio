// /pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  // Ensure it's a POST request
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  // Create a transporter object with SMTP configuration
  const transporter = nodemailer.createTransport({
    service: "gmail", // or other SMTP service providers
    auth: {
      user: process.env.EMAIL_USER, // your email address (e.g., your Gmail account)
      pass: process.env.EMAIL_PASS, // your email password or app-specific password
    },
  });

  try {
    // Send mail with the defined transporter
    await transporter.sendMail({
      from: email, // Sender's email
      to: "recipient@example.com", // Replace with the recipient email address
      subject: `New message from ${name}`,
      text: message, // The plain text message
      html: `<p>You have a new message:</p><p>${message}</p>`, // HTML version of the message
    });

    // Success response
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
}
