import logo from './logo.svg';
import './App.css';
import Todolist from './components/Todolist';
import Tabs from'@mui/material/Tabs';
import Tab from'@mui/material/Tab';
import Home from './components/Home';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState('one'); 

  const handleChange = (event, value) => {  
    setValue(value);
  };

  

  return (
    <div className="App">
      <Tabs value={value} onChange={handleChange}>
        <Tab value='one' label='Home' />
        <Tab value='two' label='ToDoList' />
      </Tabs>
      {value === 'one' && <Home /> }
      {value === 'two' && <Todolist /> }
    </div>
  );
}

export default App;
