import React, { useState, useRef } from 'react'; 

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import moment from 'moment';


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

    const[date, setDate] = useState(null); 


    const[todos, setTodos] = useState([]); 

    const addTodo = () => {
        setTodos([...todos, todo])
    }
   

    const inputChanged = (event) => {
        if(date != null) {
            const dateString = moment(date).format("DD.MM.YYYY")
            setTodo({...todo, date: dateString, [event.target.name]: event.target.value})
        } else {
            setTodo({...todo, [event.target.name]: event.target.value})
        }
        
       
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

                
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        label='Date'
                        value={date} 
                        onChange={date => setDate(date)} />
                </MuiPickersUtilsProvider>


                <TextField
                    label='Priority'
                    variant='standard'
                    name='priority'
                    value={todo.priority}
                    onChange={inputChanged}
                />
                <Button 
                    onClick={addTodo}
                    variant="outlined"
                    color='success'
                    >
                    Add
                </Button>
                <Button 
                    onClick={deleteToDo}
                    variant="outlined"
                    color='error'
                    endIcon={<DeleteIcon />}
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