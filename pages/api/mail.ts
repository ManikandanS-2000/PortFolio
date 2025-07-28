import nodemailer from 'nodemailer';

export default async function handler(req:any, res:any) {
  console.log("API Triggered")
  if (req.method !== 'POST') return res.status(405).end();
  const { name, yourmail , message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maninazi1443735@gmail.com',
      pass: 'oqyszilpfuobgiuz',
    },
  });

  const mailOptions = {
    from: yourmail ,
    to: 'manikandan.s161220@gmail.com',
    subject: `New Message from ${name}`,
    text: `${message}\n\nFrom: ${name} (${yourmail })`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Email failed to send' });
  }
}