const router = require('express').Router()
const bodyParser = require("body-parser");

//controllers for CRUD Functionality

const {addTodo, readTodo, updateTodo, deleteTodo} = require('../controllers/admin')

// post route for adding todo
router.post('/todos', addTodo);

//get route to get all todos
router.get('/todos', readTodo);

//put route to update the todo
router.put('/todos/:id', updateTodo);

//delete route to delete the todo
router.delete('/todos/:id' , deleteTodo);

module.exports =  router