import dotenv from 'dotenv';
import type {NextApiRequest, NextApiResponse} from 'next';
import nodemailer from 'nodemailer';
dotenv.config();

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'bryanpanconsulting@gmail.com',
      pass: process.env.password,
    },
    secure: true,
  });

  const message = {
    to: 'bryanpanconsulting@gmail.com',
    subject: `Message from ${req.body.name}`,
    text: req.body.message + '\n---\n' + `Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from ${req.body.email}</p>`,
  };

  await transporter.sendMail(message);
  return res.status(200).end();
}
