import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode Enabled', 'success');
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div className="container my-3">
            <div className='container my-3'>
              <Navbar name="TextUtils" mode={mode} toggleMode={toggleMode} />
            </div>
            <div className='container my-3'>
              <Alert alert={alert} />
            </div>
            <div className='container my-3'>
              <TextForm heading="Enter Your text here to Analyze" showAlert={showAlert} mode={mode} />
            </div>
          </div>} />
          <Route path='/about' element={
            <div className='container my-3'>
              <div className='container my-3'>
                <Navbar name="TextUtils" mode={mode} toggleMode={toggleMode} />
              </div>
              <div className='container my-3'>
                <Alert alert={alert} />
              </div>
              <About />
            </div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
