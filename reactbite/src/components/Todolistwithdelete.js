import React, { useState } from 'react'; 


function Todolistdelete() {

    const[todo, setTodo] = useState({
        description: '', 
        date: ''
    }); 

    const[todos, setTodos] = useState([]); 

    const addTodo = () => {
        setTodos([todo, ...todos]);    
        setTodo({description: '', date: ''})

    }

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value})
    }

    const deleteToDo = (row) => {
        setTodos(todos.filter((todo, i) => i !== row))
    }


    return(
        <div>
            <h1>Simple todo list with delete functionality</h1>
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
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    {
                        todos.map((todo, index) =>
                            <tr key={index}>
                                <td>{todo.description}</td>
                                <td>{todo.date}</td>
                                <td><button onClick={() => deleteToDo(index)}>Delete</button></td>
                            </tr>  
                            )
                    }
                </tbody>
            </table>
        </div>
    ); 
}

export default Todolistdelete;