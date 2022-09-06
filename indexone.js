const express=require("express")
const multer=require("multer")
const upload=multer({dest:"uploads/"}).single("avatar")

const app=express()

app.post("/upload",(req,res)=>{
    upload(req,res,(err)=>{
        err?res.status(400).send("Something went wrong!"):res.send(req.file)
    })
})

app.listen(7600,()=>{
    console.log("Listening on port 7600")
})