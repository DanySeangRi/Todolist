import React from 'react'
import { Sidebar } from './pages'
import { ToDoList } from './pages'
import Checked from './pages/checked/Checked'
import { Routes, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  // Lifted state for tasks


 

  return (
    <div className='app-layout h-screen flex'>
      <Sidebar />
      <Routes>
        <Route path="/" element={ <ToDoList/> } />
        <Route path="/checked" element={<Checked />} />
      </Routes>
    </div>
  );
}

export default App
