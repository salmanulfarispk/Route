import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {


  return (
    <div>

    <Routes>
<Route path='/' element={<Register/>} />
<Route path='/login' element={<Login/>} />

<Route path='/home' element={<Home/>} />


    </Routes>



    </div>
  )
}

export default Main