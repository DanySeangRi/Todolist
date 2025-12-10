import React, { useState,useEffect } from 'react';
import './todolist.css';
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import Navbar from '../container/Navbar';
const ToDoList = () => {
 const [task, setTask] = useState(() => {
  const saved = localStorage.getItem("tasks"); //this come from the setitem in useEffect 
  return saved ? JSON.parse(saved) : []; 
});
const [newTask, setNewTask] = useState("");

 const [checkedTasks,setCheckedTasks] =useState(()=>{
  const saved = localStorage.getItem('checkedTasks');
  return saved ? JSON.parse(saved) : []
 })

 useEffect(()=>{
  localStorage.setItem('checkedTasks',JSON.stringify(checkedTasks));
 },[checkedTasks]);

 function handleChecked(index){
   const taskToChecked = task[index];
   const newTasks = task.filter((_,i)=>i!==index);// new array 
   setTask(newTasks)
   setCheckedTasks([...checkedTasks,taskToChecked]) 
 }

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(task));
}, [task]);

//JSON.stringify(task) return array to string


function handleInputChange(event) {
    setNewTask(event.target.value);
  }

function addTask() {
    if (newTask.trim() !== "") {
        setTask(t => [...t, { text: newTask,time:new Date() }]);
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
<div className="todo-container ">
    <Navbar name='My Project/'/>
      <div className='todo-task '>
        <div className='add-task'>
          <h1>Today Task</h1>
          <div className='add-input'>
            <input 
              type="text"
              placeholder='Enter something..................'
              value={newTask}
              onChange={handleInputChange}
              onKeyDown= {(e)=>
                {if(e.key=='Enter'){
                addTask();
              }}}
            />
            <div className='input-add__delete'>
              <button className='add-input__btn-add' onClick={addTask}>
              <FaCirclePlus size={20}  />
            </button>
            <button className='add-input__btn-delete' onClick={deleteAll}>Delete All</button>
            </div>
          </div>
        </div>

        <ol>
          {task.map((t, index) => (
            <div key={index} className='list'>
              
                
                <span><button onClick={()=>handleChecked(index)}><CiCircleCheck/></button> {t.text} </span>
            
              <span className="time">{new Date(t.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
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
