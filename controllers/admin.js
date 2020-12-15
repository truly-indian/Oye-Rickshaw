const pool = require('../db')

//exporting post addtodo route
exports.addTodo  = async(req,res)=> { 
        try {
            const {todoheading, tododescription, todopriority} = req.body
            const newTodo = await pool.query("INSERT INTO todo(todoheading,tododescription,todopriority) VALUES ($1,$2,$3) RETURNING*", [todoheading,tododescription,todopriority]
        )
        //console.log(newTodo)
            res.status(200).json(newTodo.rows[0])
        }catch (err){
            console.error(err.message)
        }
    }

//exporting get todo route    
exports.readTodo =  async(req,res) => {
        try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.status(200).json(allTodos.rows)
        }catch (err) {
            console.error(err)
        }
    }

//exporting update todo route
exports.updateTodo = async (req,res) => {
        try{
        const {id} = req.params;
        const {todoheading,tododescription,todopriority} = req.body;
        const updatedTodo = pool.query("UPDATE todo SET todoheading = $1, tododescription = $2, todopriority = $3 WHERE todo_id = $4",
        [todoheading,tododescription,todopriority,id])
        res.status(200).json({message:"Todo is updated successfully!!"})
        }catch (err) {
            console.error(err);
        }
    }    

//exporting delete todo route
exports.deleteTodo =  async(req,res) => {
        try{
            const {id} = req.params;
            const deleteTodo = await pool.query("DELETE FROM todo where todo_id = $1", [id])
            res.status(200).json("to do was successfully deleted!!")
        }catch (err) {
            console.error(err)
        }
    }