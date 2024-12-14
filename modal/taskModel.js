const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    completionstatus:{
        type:String,
        required:true
    }
})

const tasks = mongoose.model("tasks",taskSchema)
module.exports = tasks