const express = require('express')

const app = express()

app.use(express.json())

const PORT = 5000

app.listen(PORT,(error)=>{
    error? console.log(error)
    :console.log('server is running on http://127.0.0.1:${PORT}')
})

const checkDate=require('./middlewares/checkDate')

app.set('view engine ','pug')
app.set('views','./views')

app.get('/',checkDate,(req,res)=>{
    res.render('home')
})

app.get('/contact',checkDate,(req,res)=>{
    res.render('contact')
})

app.get('/services',checkDate,(req,res)=>{
    res.render('services')
})

