require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const XLSX = require("xlsx");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const SENDER_EMAIL = process.env.SENDER_EMAIL;

const APP_PASSWORD = process.env.APP_PASSWORD;
const EXCEL_FILE = "form-data.xlsx";
console.log("SENDER_EMAIL:", SENDER_EMAIL);
console.log("APP_PASSWORD:", APP_PASSWORD ? "✅ Loaded" : "❌ MISSING");


function appendToExcel(formData) {
  let workbook;
  let worksheet;

  // Create file if it doesn't exist
  if (!fs.existsSync(EXCEL_FILE)) {
    workbook = XLSX.utils.book_new();
    worksheet = XLSX.utils.json_to_sheet([formData]);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
  } else {
    workbook = XLSX.readFile(EXCEL_FILE);
    const sheetName = workbook.SheetNames[0];
    worksheet = workbook.Sheets[sheetName];
    const existingData = XLSX.utils.sheet_to_json(worksheet);
    const updatedData = [...existingData, formData];
    worksheet = XLSX.utils.json_to_sheet(updatedData);
    workbook.Sheets[sheetName] = worksheet;
  }

  XLSX.writeFile(workbook, EXCEL_FILE);
}

app.post("/submit-form", async (req, res) => {
  const { name, email, contact, brand, service } = req.body;

  const formData = {
    Name: name,
    Email: email,
    Contact: contact,
    Brand: brand,
    Service: service,
    Timestamp: new Date().toLocaleString()
  };

  try {
    // ✅ Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SENDER_EMAIL,
        pass: APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `LINE Agency <${SENDER_EMAIL}>`,
      to: SENDER_EMAIL,
      subject: `New Contact Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Contact Number: ${contact}
Brand Name: ${brand}
Service Required: ${service}
      `,
    };

    await transporter.sendMail(mailOptions);

    // ✅ Append to Excel
    appendToExcel(formData);

    res.status(200).json({ message: "Form submitted, email sent, and data saved!" });

  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Something went wrong!" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
