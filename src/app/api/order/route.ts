import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {

  function removeBase64Prefix(base64String:string) {
    const prefix = 'data:image/png;base64,';
    
    if (base64String.startsWith(prefix)) {
      return base64String.substring(prefix.length);
    } else {
      return base64String;
    }
  }



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

  const img2 = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #007BFF;
        }
        p {
          font-size: 16px;
        }
      </style>
    </head>
    <body>
      <h1>Test Order #</h1>
      <ul>
        <li>First Name: ${firstName}</li>
        <li>Last Name:  ${lastName}</li>
        <li>Company Name:  ${companyName ? companyName : 'N/A'}</li>
        <li>Street Address 1:  ${streetAddress1}</li>
        <li>Suburb:  ${suburb}</li>
        <li>State:  ${state}</li>
        <li>Postcode:  ${postcode}</li>
        <li>Phone:  ${phone}</li>
        <li>Email:  ${email}</li>
        <li>Order Notes: ${orderNotes}</li>
        <li>Order Items: ${cartItems[0].name}</li>
      </ul>
      <div>
    
      <img width="100" height="100" src="cid:unique2@nodemailer.com" alt="Cap Image Front" />
     

      </div>

    </body>
  </html>
`

// let imgAttachments = [];

// for (const obj of cartItems) {
//   const nestedImages = obj.views;
//   for (const key in nestedImages) {
//     imgAttachments.push({
//       filename: `${obj.name}_${key}.png`,
//       encoding: 'base64',
//       content: removeBase64Prefix(nestedImages[key]),
//       cid: `${obj.name.toLowerCase()}_${key}@nodemailer.com`
//     });
//   }
// }



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
    subject: `Order Email from ${firstName + " " + lastName}  (${email})`,
  //   html: `
  //   <html>
  //     <body>
  //       <h1>Embedded Image Example</h1>
  //       ${imgAttachments.map(attachment => `
  //       <img src="cid:${attachment.cid}" alt="${attachment.filename}" width="100">
  //     `).join('')}
  //     </body>
  //   </html>
  // `,
  html: `
    <html>
      <body>
        <h1>Order #</h1>
        <h2>Order Details: </h2>
        <ul>
          <li>Name: ${firstName} ${lastName}</li>
          <li>Email: ${email}</li>
          <li>Company Name: ${companyName ? companyName : 'N/A'}</li>
          <li>Phone: ${phone}</li>
          <li>Street Address 1: ${streetAddress1}</li>
          <li>Street Address 2: ${streetAddress2}</li>
          <li>Postcode: ${postcode}</li>
          <li>Suburb: ${suburb}</li>
          <li>State: ${state}</li>
          <li>Order Notes: ${orderNotes ? orderNotes : 'N/A'}</li>
        </ul>
        <h2>Cart Items: </h2>
  
        <h2> Custom Cap A Details: </h2>
        <ul>
          <li>Front Panel: ${cartItems[0].configuration.capParts[0].colorId ? cartItems[0].configuration.capParts[0].colorId  : 'N/A'} </li>
          <li>Peak: ${cartItems[0].configuration.capParts[1].colorId ? cartItems[0].configuration.capParts[1].colorId  : 'N/A'} </li>
          <li>Under Brim: ${cartItems[0].configuration.capParts[2].colorId ? cartItems[0].configuration.capParts[2].colorId  : 'N/A'} </li>
          <li>Upper Stripe: ${cartItems[0].configuration.capParts[3].colorId ? cartItems[0].configuration.capParts[3].colorId  : 'N/A'} </li>
          <li>Lower Stripe: ${cartItems[0].configuration.capParts[4].colorId ? cartItems[0].configuration.capParts[4].colorId  : 'N/A'}</li>
          <li>Back Mesh: ${cartItems[0].configuration.capParts[5].colorId ? cartItems[0].configuration.capParts[5].colorId  : 'N/A'}</li>
          <li>Snap Back: ${cartItems[0].configuration.capParts[6].colorId ? cartItems[0].configuration.capParts[6].colorId  : 'N/A'} </li>
        </ul>
        <img src="cid:unique1@nodemailer.com" alt="img1" width="100">
        <img src="cid:unique2@nodemailer.com" alt="img2" width="100">
        <img src="cid:unique3@nodemailer.com" alt="img3" width="100">
        <img src="cid:unique4@nodemailer.com" alt="img4" width="100">
      </body>
    </html>
  `,
  attachments: [
    {
      filename: 'image1.png',  // Name of the attached file
      encoding: 'base64',
      content: removeBase64Prefix(cartItems[0].views.front),
      cid: 'unique1@nodemailer.com' // Unique identifier for the embedded image
    },
    {
      filename: 'image2.png',  // Name of the attached file
      encoding: 'base64',
      content: removeBase64Prefix(cartItems[0].views.back),
      cid: 'unique2@nodemailer.com' // Unique identifier for the embedded image
    },
    {
      filename: 'image3.png',  // Name of the attached file
      encoding: 'base64',
      content: removeBase64Prefix(cartItems[0].views.right),
      cid: 'unique3@nodemailer.com' // Unique identifier for the embedded image
    },
    {
      filename: 'image4.png',  // Name of the attached file
      encoding: 'base64',
      content: removeBase64Prefix(cartItems[0].views.left),
      cid: 'unique4@nodemailer.com' // Unique identifier for the embedded image
    }
  ],
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