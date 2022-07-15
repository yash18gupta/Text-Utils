import { BrowserRouter,Route,Routes,} from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#43484d';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      
      <div className="container my-3">
      <Routes>
        
            
            <Route exact path="/" element={<TextForms heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />}>
            </Route>
            <Route exact path="/about" element={<About mode={mode}/>}>
            </Route>
            
          </Routes>
          </div> 
    </BrowserRouter>  
    </>
  );
}

export default App;

