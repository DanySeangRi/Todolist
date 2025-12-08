import React from 'react'
import { Sidebar } from './pages'
import { ToDoList } from './pages'
import './App.css'

const App = () => {

  return (
    <div className='app-layout'>
     <Sidebar />
      <ToDoList/>
    </div>
  )
}

export default App

