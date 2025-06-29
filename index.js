const express = require('express');
const path = require("path")

const app = express();
app.set('view engine','ejs')
app.set("views",path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 7000
app.get("/",(req,res)=>{
    res.render('index')
})
app.get("/work",(req,res)=>{
    res.render('work')
})
app.get("/about",(req,res)=>{
    res.render('About')
})
app.get("/contact",(req,res)=>{
    res.render('Contact')
})
app.get("/gemini",(req,res)=>{
    res.render('project1')
})
app.get("/resultsystem",(req,res)=>{
    res.render('project2')
})
app.get("/doubtbot",(req,res)=>{
    res.render('project3')
})
app.get("/languageconverter",(req,res)=>{
    res.render('project4')
})
app.get("/kaushalsetu",(req,res)=>{
    res.render('project5')
})
app.get("/Nullclass",(req,res)=>{
    res.render('exp1')
})
app.get("/bharatintern",(req,res)=>{
    res.render('exp2')
})
app.get("/Pinnacleinfotech",(req,res)=>{
    res.render('exp3')
})
app.listen(PORT , ()=>{
    console.log(`Server is Runing http://localhost:${PORT}`);
})