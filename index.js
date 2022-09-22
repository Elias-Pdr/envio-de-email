require('dotenv').config()

const transportador = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
});

const emailASerEnviado = {
    from: process.env.EMAIL,
    to: 'purplefire0008@proton.me',
    subject: 'Muita luta 4',
    text: 'ue?'
}

transportador.sendMail(emailASerEnviado, (err) => {
    if (err){
        console.log(err);
        return
    }
    console.log('Email enviado!');

})
console.log('...');
