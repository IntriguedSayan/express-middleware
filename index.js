const express=require("express")
const fs=require("fs")
const products=require("./Routes/products.routes")
const cors=require("cors")

const app=express()

app.use(express.json())
app.use(express.text())
// app.use(cors({
//     origin:["urls access needed"]
// }))

const timeLogger=(req,res,next)=>{
    const startTIme=new Date().getTime()
    next()
    const endTime=new Date().getTime()
    console.log(endTime-startTIme)
}
const welcomeLogger=(req,res,next)=>{
        console.log("WELCOME")
        next()
        console.log("BYE")
    
}
const authenticationLogger=(req,res,next)=>{
    if(req.query.name==="admin"){
        next()
    }else{
        res.send("Not Authorised")
    }
}
app.use(timeLogger)

app.get("/",(req,res)=>{
    res.send("Homepage")
})
app.get("/about",(req,res)=>{
    const result=fs.readFileSync("./Readme.md",{encoding:"utf-8"})
    res.send(result)
})
app.get("/contact",authenticationLogger,(req,res)=>{
    res.send("Contact page")
})
app.post("/addDetails",(req,res)=>{
    res.send(req.body)
})

app.use("/products",products)


app.listen(7500,()=>{
    console.log("LIstening on port 7500");
})