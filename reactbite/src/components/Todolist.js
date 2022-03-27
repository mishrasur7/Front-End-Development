import React, { useState, useRef } from 'react'; 

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function Todolist() {

    const gridRef = useRef(); 

    const columns = [
        {field: 'description', sortable: true, filter: true, floatingFilter: true}, 
        {field: 'date', sortable: true, filter: true, floatingFilter: true}, 
        {field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}
        }
    ]

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


    const deleteToDo = () => {
        if(gridRef.current.getSelectedNodes().length > 0) {
            setTodos(todos.filter((todo, i) => i !== gridRef.current.getSelectedNodes()[0].childIndex))
        } else {
            alert("Select row first!")
        }
        
    }

    return(
        <div>
            <h1>Simple todo list</h1>
            <Stack 
            spacing={2}
            direction='row'
            alignItems='center'
            justifyContent='center'
            >
                <TextField
                    label='Description'
                    variant='standard'
                    name='description'
                    value={todo.description}
                    onChange={inputChanged} />

                <TextField
                    label='Date'
                    variant='standard'
                    name='date'
                    // type="date"
                    value={todo.date}
                    onChange={inputChanged}
                />
                <TextField
                    label='Priority'
                    variant='standard'
                    name='priority'
                    value={todo.priority}
                    onChange={inputChanged}
                />
                <Button 
                    onClick={addTodo}
                    variant="contained"
                    color='success'
                    >
                    Add
                </Button>
                <Button 
                    onClick={deleteToDo}
                    variant="contained"
                    color='error'
                    >
                    Delete
                </Button>
            </Stack>
            <div className='ag-theme-material' style={{height: 400, width: 700, margin: 'auto'}}>
            <AgGridReact
                animateRows="true"
                ref={gridRef}
                onGridReady={params => gridRef.current = params.api}
                rowSelection="single"
                rowData={todos}
                columnDefs={columns}
            />
        </div>
           
        
        </div>
    ); 
}

export default Todolist;