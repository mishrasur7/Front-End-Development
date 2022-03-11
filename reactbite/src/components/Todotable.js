import React, {useRef} from 'react'; 


function Todotable(props) {
    const gridRef = useRef(); 

    const columns = [
        {field: 'description', sortable: true, filter: true}, 
        {field: 'date', sortable: true, filter: true}, 
        {field: 'priority', sortable: true, filter: true, 
            cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}
        }
    ]
   
    return (
        <div className='ag-theme-material' style={{height: 400, width: 700, margin: 'auto'}}>
            <AgGridReact
                ref={gridRef}
                onGridReady={params => gridRef.current = params.api}
                rowSelection="single"
                rowData={props.todos}
                columnDefs={columns}
            />
        </div>
    ); 
}

export default Todotable; 