import React, { useState } from 'react'; 
import Todotable from './Todotable';


function Todolist() {

    const[todo, setTodo] = useState({
        description: '', 
        date: '', 
        priority: ''
    }); 

    const[todos, setTodos] = useState([]); 

    const addTodo = () => {
        setTodos([...todos, todo])
    }
   

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }


    const deleteToDo = (row) => {
        setTodos(todos.filter((todo, i) => i !== row))
    }

    return(
        <div>
            <h1>Simple todo list</h1>
            <input
            placeholder='Description'
            name='description'
            value={todo.description}
            onChange={inputChanged} />

            <input
            placeholder='Date'
            name='date'
            type="date"
            value={todo.date}
            onChange={inputChanged}
             />
             <input
            placeholder='Priority'
            name='priority'
            value={todo.priority}
            onChange={inputChanged}
             />
            <button onClick={addTodo}>Add</button>
            <Todotable todos ={todos} deleteTodo ={deleteToDo} />
        
        </div>
    ); 
}

export default Todolist;