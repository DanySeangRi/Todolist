import React, { useState } from 'react';
import './todolist.css';
import { FaSlideshare } from "react-icons/fa";
import { BsPcDisplay } from "react-icons/bs";
import { FaRegComments } from "react-icons/fa6";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci";
const Feature = (props) => {
  const Icon = props.icon;
  const name = props.name; // vea yor domlai pi icon 1 1 
  return (
    <div className='feature'>
      <button><Icon size={20} /></button>
      <button>{name}</button>
    </div>
  );
};

const ToDoList = () => {
  const [task, setTask] = useState([{ text: 'dada', time: new Date() }]);
  const [newTask, setNewTask] = useState("");



  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask(t => [...t, { text: newTask, time: new Date() }]);
      setNewTask("");

    }
  }

  function deleteTask(index) {
    setTask(task.filter((_, i) => i !== index));
  }

  function deleteAll() {
    setTask([]);
  }

  return (
   <div className='todo-container'> <div className='todo-navbar'> 
      <div> 
          <p>My Project/</p>
      </div>
      <div className='todo-navbar__left'>
         <Feature icon={CiShare1 } name="Search" /> 
         <Feature icon={CiBoxList } name="Display" />
          <Feature icon={FaRegComments} name="" /> 
          <Feature icon={ BiDotsHorizontal} name="" />
      </div> 
          
    </div>

      <div className='todo-task'>
        <div className='add-task'>
          <h1>Today Task</h1>
          <div className='add-input'>
            <input
              type="text"
              placeholder='Enter something...'
              value={newTask}
              onChange={handleInputChange}
              onKeyDown= {(e)=>
                {if(e.key=='Enter'){
                addTask();
              }}}
            />
            <div className='input-add__delete'>
              <button className='add-input__btn-add' onClick={addTask}>
              <FaCirclePlus size={20} />
            </button>
            <button className='add-input__btn-delete' onClick={deleteAll}>Delete All</button>
            </div>
          </div>
        </div>

        <ol>
          {task.map((t, index) => (
            <div key={index} className='list'>
              <span>{t.text}</span>
              <span className="time">{t.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                <button className='delete-btn' onClick={() => deleteTask(index)}>
                <MdDelete size={15} />
              </button>
              </span>
              
            </div>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default ToDoList;
