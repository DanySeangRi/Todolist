import React from 'react'
import { Sidebar,ToDoList,Checked,Search } from './pages'


import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  // Lifted state for tasks


 

  return (
    <div className='app-layout h-screen flex'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<ToDoList/>} />
        <Route path="/checked" element={<Checked/>} />
         <Route path="/search" element={<Search/>} />
        
      </Routes>
    </div>
  );
}

export default App
