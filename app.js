const Express=require('express')
const BodyParser=require('body-parser')
const Mongoose=require('mongoose')
const Cors=require("cors")
const bcrpt=require('bcrypt')
const jwt=require('jsonwebtoken')
const userModel=require("./models/users")
const postModel=require("./models/posts")


let app = Express()

app.use(BodyParser.urlencoded({extended:true}))
app.use(BodyParser.json())
app.use(Cors())

Mongoose.connect("mongodb+srv://ajithra:ajithra@cluster000.hjf3qzh.mongodb.net/BootcampBlogDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.post("/signin",async(req,res)=>{
    var getEmail=req.body.email
    var password=req.body.password

    let result=userModel.find({email:getEmail},(err,data)=>{

        if(data.length>0){
            const passwordValidator=bcrpt.compareSync(password,data[0].password)
            if(passwordValidator){

                jwt.sign({email:getEmail,id:data[0]._id},"ictacademy",{expiresIn:"1d"},
                
                (err,token)=>{
                    if (err) {
                        res.json({"status":"error","error":err})

                    } else {
                        res.json({"status":"success","data":data,"token":token})
                        
                    }

                })

                

            }
            else{
                res.json({"status":"failed","data":"invalid password"})

            }

        }

        else{
            res.json({"status":"failed","data":"invalid email id"})

        }

    })


})

app.post("/signup",async(req,res)=>{

    console.log(req.body)
    let data = new userModel({ name: req.body.name, 
        email: req.body.email,
         password: bcrpt.hashSync(req.body.password,10) })
    console.log(data)
    await data.save()


    res.json({"status":"success","data":data})

})

app.post("/blogpost",(req,res)=>{

   jwt.verify(req.body.token,"ictacademy",(err,decoded)=>{
    if(decoded && decoded.email){




        let data = new postModel({ userId: req.body.userId, 
            Post: req.body.Post})

          data.save()
          res.json({"status":"post added succesfully"})


    }
    else{
        res.json({"status":"unauthorised user"})

    }
   })

})

app.listen(3001,()=>{
    console.log("App running")
})