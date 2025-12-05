import React from 'react'
import './todolist.css'
import { FaSlideshare } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa6";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
const Feature = (props) => {
  const Icon = props.icon;
  const name = props.name; // vea yor domlai pi icon 1 1 
  return (
    <div className='feature'>
      <button ><Icon size={20} /></button>
      <button>{name}</button>
    </div>
  );
};

const ToDoList = () => {
  
  return (
    <div className='todo-container'>
       <div className='todo-navbar'>
          <div>
            <p>My Project/</p>
          </div>
          <div className='todo-navbar__left'>
            <Feature icon={FaSlideshare} name="Search" />
             <Feature icon={BsPcDisplay} name="Display" />
              <Feature icon={FaRegComments} name="" />
              <Feature icon={ BiDotsHorizontal} name="" />
          </div>
       </div>
       <div className='todo-task'>
          <h1>Today Task</h1>
          <Feature icon={FaCirclePlus} name="Add Task" onClick=''/>
       </div>
    </div>
  )
}

export default ToDoList
