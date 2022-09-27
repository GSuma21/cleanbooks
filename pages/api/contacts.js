// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

require('dotenv').config()

const sgMail = require('@sendgrid/mail')
const {SG_API_KEY,FROM_EMAIL,TO_EMAIL} = process.env;