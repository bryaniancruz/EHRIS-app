import React, {useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './component/Navbar';



function App() {
const [currentForm,setCurrentForm] = useState('login');

const toggleForm = (formName) => {
  console.log(formName)
  setCurrentForm(formName);
}

  return (
    <div className="App">
     {
     currentForm  === 'login' ? <Login onFormSwitch={toggleForm}/> :
      <div>
       <NavBar /> 
      
      </div>
    
     
     }
    </div>
  );
}

export default App;
