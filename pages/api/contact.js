const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  try {
    let content = "";
    let data = req.body;
    let keys = Object.keys(data);

    keys.forEach((element) => {
      content += `${element}: ${data[element]} <br/>`;
    });
    const msg = {
      to: process.env.TO_EMAIL_ADDRESS,
      from: process.env.FROM_EMAIL_ADDRESS,
      subject: "Contact us notification",
      html: `Details of contact info:<br/>${content}`,
    };
    const res = await sgMail.send(msg);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed to send emaildad" });
  }
  return res.status(200).json({ message: "successfull" });
}
