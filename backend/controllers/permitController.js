require('dotenv').config();
const Load = require('../models/permitModel');
const nodemailer = require('nodemailer');

// Initialize Nodemailer transporter with your email configurations
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail as the email service provider
  auth: {
    user: 'michaellaineza13@gmail.com', // Your Gmail email address
    pass: process.env.EMAIL_PASSWORD // Your Gmail password or application-specific password
  }
});

// Controller function to accept incoming data and send email
exports.acceptAndSendEmail = async (req, res) => {
  try {
    // Assuming req.body contains the payload
    const payload = req.body;
    

    // Save payload to the database using Sequelize
    const newLoad = await Load.create(payload);
    console.log('Email '+payload.email)
    const email=payload.email
    
    
    // Send email using transporter
    await transporter.sendMail({
      from: 'michaellaineza13@email.com',
      to: email,
      subject: 'Your Irembo Details',
      text: `Your Irembo Details: ${JSON.stringify(payload)}`,
    });

    res.status(200).json({ message: 'Your Irembo details have been sent' });
  } catch (error) {
    console.error('Error accepting load and sending email:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
