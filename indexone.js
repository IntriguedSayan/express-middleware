const express=require("express")
const multer=require("multer")
const upload=multer({dest:"uploads/"}).single("avatar")

let storage = multer.diskStorage({destination:function(req,file,cb){
    cb(null,"./uploads")},
              filename:function(req,file,cb){
    cb(null, file.originalname)
    }
})

const uploadOne=multer({storage:storage}).single("demoImg")
const uploadMult=multer({storage:storage})
const app=express()

app.post("/upload",(req,res)=>{
    upload(req,res,(err)=>{
        err?res.status(400).send("Something went wrong!"):res.send("File Stored")
    })
})
app.post("/uploadOne",(req,res)=>{
    uploadOne(req,res,(err)=>{
        err?res.status(400).send("Something went wrong"):res.send("File Stored")
    })
})
app.post("/uploadMult",uploadMult.array("files"),(req,res)=>{
    console.log(req.body)
    console.log(req.files)
    res.send("Files Stored Successfully")
})

app.listen(7600,()=>{
    console.log("Listening on port 7600")
})