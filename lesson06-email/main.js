var mailer = require("nodemailer");
var env=require("dotenv").config();
console.log(process.env.user);

var transport = mailer.createTransport({
    service: 'gmail',
    auth:{
        user: process.env.user,
        pass: process.env.pass
    }
});

var mailOptions = {
    from: process.env.from,
    to: process.env.to,
    subject: 'First eamil using nodemailer',
    text: 'Here goes easy text , V :)'
}

transport.sendMail(mailOptions,function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Email is sent with response message : ' + info.response);
    }
})

