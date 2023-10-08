import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { 
    firstName, 
    lastName,
    email,
    companyName, 
    phone, 
    streetAddress1, 
    streetAddress2, 
    postcode,
    suburb, 
    state, 
    orderNotes, 
    cartItems 
  } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.TO_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Order Email from ${firstName + " " +lastName}  (${email})`,
    text:  `
    First Name: ${firstName}
    Last Name:  ${lastName}
    Company Name:  ${companyName ? companyName : 'N/A'}
    Street Address 1:  ${streetAddress1}
    Street Address 2:  ${streetAddress2}
    State:  ${state}
    Postcode:  ${postcode}
    phone:  ${phone}
    Email:  ${email}
    Order Notes: ${orderNotes}
    Order Items: ${cartItems[0].name}
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Order sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}