import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';


const nodeMailerTransport = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
};

const sendMail = (user, emailBody) => {
  const message = {
    from: `ajaomahmudah@gmail.com`,
    to: `${user.email}`,
    subject: 'Account Details',
    html: emailBody,
  };
  const transport = nodeMailerTransport();
  try {
    transport.verify(function(error, success) {
      if (error) {
        console.error(`Error: ${error}`);
      } else {
        transport.sendMail(message, (error, info) => {
          if (error) {
            console.error(`Error: ${error}`);
          }
          console.log(`Email sent to ${user.name}!`);
        });
      }
    });
  } catch (e) {
    throw new Error(e);
  }
};

export const sendUserMail = user => {
  const email = {
    body: {
      greeting: 'Dear',
      signature: 'Sincerely',
      name: `${user.name}`,
      intro: `You successfully booked your lab tests on our system. \n\nKindly find below the login details to your account. \n`,
      table: {
        data: [
          {
            Username: `${user.username}`,
            Password: `${user.password}`,
          },
        ],
      },
      action: {
        instructions: 'To get started, please click here:',
        button: {
          color: '#22BC66', // Optional action button color
          text: 'Login to your account',
          link: 'https://localhost:4050/login',
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email or call this number 08033344000, we'd love to hear from you.",
    },
  };

  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      // Appears in header & footer of e-mails
      name: 'Laboratory',
      link: 'https://example.com/',
      // Optional product logo
      // logo: 'https://mailgen.js/img/logo.png'
    },
  });

  const emailBody = mailGenerator.generate(email);

  sendMail(user, emailBody);
};
