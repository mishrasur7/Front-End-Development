import React from 'react'; 
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Todotable(props) {
    const columns = [
        {field: 'description', sortable: true, filter: true}, 
        {field: 'date', sortable: true, filter: true}, 
        {field: 'priority', sortable: true, filter: true}
    ]
   
    return (
        <div className='ag-theme-material' style={{height: 400, width: 700, margin: 'auto'}}>
            <AgGridReact 
                rowData={props.todos}
                columnDefs={columns}
            />
        </div>
    ); 
}

export default Todotable; 