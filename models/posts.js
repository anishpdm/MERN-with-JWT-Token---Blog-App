
const Mongoose=require('mongoose')



const postSchema=Mongoose.Schema(

    {

        userId:String,

        Post:String,

      

    }
)
var postModel=Mongoose.model("posts",postSchema)

module.exports=postModel

