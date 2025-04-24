const express = require('express');
const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('server is running!');
});

app.post('/signup', (req, res) =>{
    const{ Usename, Email, Password, dob } = req.body;

    if(!Usename || Usename.trim() == '') {
        return res.status(400).json({error: 'Usename can not be empty'});

    }

    if(!Email || Email.trim() == '') {
        return res.status(400).json({error: 'Email can not be empty'});
    }

    if(!Password || Password.length <8  || Password.length >=16) {
        return res.status(400).json({error: 'Password  length should be greter than 8 or  less than or equal to 16'});
    }

    res(201).json({
        Message: 'singup is successfully',
        data: {Usename, Email, dob},
    });


});

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
});