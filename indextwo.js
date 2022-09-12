const express=require("express")
const app=express()

const morgan=require("morgan")

app.use(morgan(`:method :status :res[content-length] :total-time[digits] [:date[clf]] :http-version :url newLine`))

app.get("/",(req,res)=>{
    res.send("HomePage")
})
app.get("/add",(req,res)=>{
    res.send("ADD Something")
})

app.listen(7700,()=>{
    console.log("Listening on port 7700");
})