import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className='main'>
      <h2 className='main-header'>React Crud Operation</h2> 
      <Routes>

        <Route exact path='/create' element={<Create />} />
    
        <Route exact path='/read' element={<Read/>}  />
       
        <Route exact path='/Update' element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
