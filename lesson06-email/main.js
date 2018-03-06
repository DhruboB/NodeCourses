var mailer = require("nodemailer");
var env=require("dotenv").config();
console.log(process.env.user);
// lets create a transporter object to facilitate the emailing mechanism.
var transport = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.user,
        pass: process.env.pass
    }
});
// Lets capture differetn emailing options
var mailOptions = {
    from: process.env.from,
    to: process.env.to,
    subject: 'First eamil using nodemailer',
    text: 'Here goes easy text , V :)'
}
// Now sending email with above options
transport.sendMail(mailOptions,function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email is sent with response message : ' + info.response);
    }
})

