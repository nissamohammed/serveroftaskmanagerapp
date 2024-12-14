const tasks = require("../modal/taskModel")

//addTask: Create a new task.
exports.addTaskController =async(req,res)=>{
    console.log('inside the Task adding controller');
    const {title,description,completionstatus} = req.body
try{
        const newTask = new tasks({
            title, 
            description,
            completionstatus
        })
        await newTask.save()
        res.status(200).json(newTask)
    //console.log(newTask);
}catch(error){
    //client side error-401
    res.status(401).json(`Task submission failed due to ${error}`)
}
}

//Get a list of all tasks.
exports.getAllTaskController = async(req,res)=>{
    console.log(req);
   try{
       //to get all task
       const alltask = await tasks.find()
       if (alltask) {
           res.status(200).json(alltask)
       } else {
           res.status(406).json('No Task yet')
       }

   } catch (error) {
       res.status(401).json(error)
   }
}

//Update a specific task by ID.
exports.editTaskController = async(req,res)=>{
    const {id} = req.params
    const {title,description,completionstatus} = req.body
    try {
        const existingTask = await tasks.findByIdAndUpdate({ _id: id }, {
            title,description,completionstatus
        })
        await existingTask.save()
        res.status(200).json(existingTask)

    } catch (error) {
        res.status(401).json(error)
    }

}


//Delete a specific task by ID.
exports.deletetaskController = async(req,res)=>{
    console.log('inside delete function');
     const {id}= req.params
     console.log(id);
     try{
           const Taskdel = await tasks.findByIdAndDelete({_id:id})
           res.status(200).json(Taskdel)
        }catch(error) {
            res.status(401).json(error)
        }
}


