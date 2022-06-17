import nodemailer from 'nodemailer';
export default function ContactApi (req, res) {
  const{firstName,
lastName,
message,
title,
yourMail,
    yourMobile } = req.body
  const transporte = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
  });
  console.log(req.body);
  res.status(200).json(req.body);
}
