const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'streamroutes.opiniones@gmail.com',
    pass: 'tupassword'
  }
});

const mailOptions = {
  from: 'streamroutes.opiniones@gmail.com',
  to: 'alanslgdo2902@gmail.com',
  subject: 'Correo de prueba',
  text: 'Este es un correo de prueba enviado desde JavaScript.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Correo enviado: ' + info.response);
  }
});