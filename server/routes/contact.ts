import { RequestHandler } from "express";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export const handleContactSubmission: RequestHandler = (req, res) => {
  const { name, email, company, service, message } = req.body as ContactFormData;

  // Validate required fields
  if (!name || !email || !service || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  // Log the submission (in production, you would send an actual email here)
  const timestamp = new Date().toISOString();
  console.log(`
=== New Contact Form Submission ===
Timestamp: ${timestamp}
Name: ${name}
Email: ${email}
Company: ${company}
Service: ${service}
Message: ${message}
=====================================
  `);

  // In a production environment, you would integrate with an email service like:
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - Nodemailer with SMTP
  //
  // Example with nodemailer (requires npm install nodemailer):
  // import nodemailer from 'nodemailer';
  // const transporter = nodemailer.createTransport({...});
  // await transporter.sendMail({
  //   from: email,
  //   to: 'natureadmire@gmail.com',
  //   subject: `New Contact Form: ${service}`,
  //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nService: ${service}\n\nMessage:\n${message}`
  // });

  // For now, return success response
  res.json({
    success: true,
    message: "Thank you for your submission. We will contact you soon at " + email,
  });
};
