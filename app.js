const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    const result = {
        ipaddress:req.headers['x-forwarded-for'],
        language:req.headers['accept-language'],
        software:req.headers['user-agent']
    }
    res.json(result)
})


app.listen(PORT,()=>{
    console.log('Server is up and running')
})