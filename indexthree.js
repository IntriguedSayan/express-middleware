const express=require("express")
const {body, validationResult}=require("express-validator")
const bodyParser=require("body-parser")

const app=express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/movies",body("id").isNumeric(),
body("name").isString().isLength({min:2}),
body("rating").isNumeric(),
body("description").isString().isLength({min:3}),
body("genre").isString().isLength({min:3}),
body("cast").isArray(),(req,res)=>{

    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({success:false,errors:errors.array() });
    }
    
    res.status(200).json({
        success: true,
        message: 'Login successful',
    })
    


})



app.listen(7800,()=>{

    console.log("Listening on port 7800")

})