const express = require('express')
const taskController = require('./controller/taskController')
const router = new express.Router()

//add Task
router.post('/api/tasks',taskController.addTaskController)

//to get alltask
router.get('/api/tasks',taskController.getAllTaskController)

//edit/update Task
router.put('/api/tasks/:id',taskController.editTaskController)

//Delete a specific task by ID
router.delete('/api/tasks/:id',taskController.deletetaskController)

module.exports = router