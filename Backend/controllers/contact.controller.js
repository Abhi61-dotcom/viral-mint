const Contact = require("../models/contact.model");
const nodemailer = require("nodemailer");

const sendContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      company,
      email,
      country,
      industry,
      service,
      message,
    } = req.body;

    // ✅ combined name
    const name = `${firstName} ${lastName}`;

    // ✅ SAVE ALL (IMPORTANT FIX)
    const newContact = new Contact({
      firstName, // ✅
      lastName, // ✅
      name, // ✅

      phone,
      company,
      email,
      country,
      industry,
      service,
      message,
    });

    await newContact.save();

    // email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${service}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Industry:</b> ${industry}</p>
        <p><b>Service:</b> ${service}</p>  
        <p><b>Message:</b> ${message}</p>
      `,
    };

    // await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message saved & email sent ✅",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error ❌",
    });
  }
};

module.exports = { sendContact };
