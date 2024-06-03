const mongoose=require('mongoose')


const TodoSchema=new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})


const TodoModel=mongoose.model("todos",TodoSchema)
module.exports=TodoModel