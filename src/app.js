const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const http = require('http');
const path = require('path')
const hbs = require('hbs');
const { stat } = require('fs');

const templatePath= path.join(__dirname,'../templates/views');
const staticPath= path.join(__dirname,'../public');
const partialsPath= path.join(__dirname,'../templates/partials');
console.log(__dirname)
app.set('view engine','hbs');
app.set('views',templatePath);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

//routing
app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404error');
})

app.listen(port,() =>{
    console.log(`Running on port ${port}`)
})