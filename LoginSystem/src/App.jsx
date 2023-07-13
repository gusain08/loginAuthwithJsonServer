import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registraion from './Registraion';
import Login from './Login'; 
import Home from './Home';
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
   <>
    <ToastContainer theme='colored'/>
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registraion' element={<Registraion/>}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App