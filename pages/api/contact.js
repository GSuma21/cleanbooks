import nodemailer from "nodemailer";

export default async function handler(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.FROM_EMAIL_ADDRESS,
        pass: process.env.FROM_EMAIL_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });
    let content = "";
    let data = req.body;
    let keys = Object.keys(data);

    keys.forEach((element) => {
      content += `${element}: ${data[element]} <br/>`;
    });
    await transporter.sendMail({
      from: process.env.FROM_EMAIL_ADDRESS,
      to: process.env.TO_EMAIL_ADDRESS,
      subject: `Contact us notification`,
      html: `Details of contact info:<br/>
      ${content}
          `,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to send email, try again" });
  }
  return res.status(200).json({ message: "successfull" });
}
