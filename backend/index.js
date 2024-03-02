require('dotenv').config()
var bodyParser=require('body-parser')
const express=require('express')
var app=express()
const cors=require('cors')
const Load=require('./models/permitModel')


const load=require('./routes/loadRouter')

Load.sync();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.use('/', load);


const port=process.env.PORT
app.listen(port, ()=> console.log(`listening on port ${port}`))