var nodemailer = require('nodemailer');

var demo={

 sendMail:function(demo,callback){   
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theveganstore2019@gmail.com',
    pass: 'vegan2019'
  }
});

var mailOptions = {
  from: 'theveganstore2019@gmail.com',
  to: demo.to,
  subject:demo.subject,
  text: demo.message
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}
}
module.exports=demo;