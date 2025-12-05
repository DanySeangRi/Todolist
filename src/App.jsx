import React from 'react'
import { Sidebar } from './container'
import { ToDoList } from './components'
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

