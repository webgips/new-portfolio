const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);

exports.sendContactMessage = functions.database.ref('/messages/{pushKey}').onWrite(event => {
  const snapshot = event.data;
// Only send email for new messages.
  if (snapshot.previous.val() || !snapshot.val().name) {
    return;
  }
  
  const val = snapshot.val();
  
  const mailOptions = {
    from: 'webgips@gmail.com',
    to: 'webgips@gmail.com',
    subject: `Сообщение от ${val.name}`,
    // html: val.html
    html: `<html>		
    		<head>		
                   <title> Сообщение от ${val.name}</title>		
                </head>		
                 <body>		
                    <p style="font-weight: bold"> Имя: ${val.name}</p>                              		
                     <br>		
                    <p style="font-weight: bold"> Email: ${val.email}</p>  		
                     <br>	
                    <p style="font-weight: bold"> Company: ${val.company}</p>  		
                     <br>	
                    <p style="font-weight: bold"> Position: ${val.position}</p>  		
                     <br>	

                  <p style="font-weight: bold">Сообщение: ${val.descr}</p> 		
              </body>		
             </html>`
  };
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('Mail sent to: webgips@gmail.com')
  });
});