const express=require("express")
    //or
// const {Router}=require("express")
const products=express.Router()

products.get("/",(req,res)=>{
    res.send("welcome to products")
})

module.exports=products