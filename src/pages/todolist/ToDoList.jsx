import React, { useState,useEffect } from 'react';
import './todolist.css';
import { FaCirclePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import Navbar from '../container/Navbar';
import { RiEdit2Fill } from "react-icons/ri";
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

const [editIndex,setEditIndex] =useState(null);
const [editText,setEditText] =useState("");

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
 function startModify(index){
  setEditIndex(index)
  setEditText(task[index].text)
 }


 function saveModify(index) {
    const updated = task.map((t, i) =>
      i === index ? { ...t, text: editText } : t
    );

    setTask(updated);
    setEditIndex(null);
    setEditText("");
  }

 function cancelModify(){
   setEditIndex(null)
   setEditText("")
 }

  return (
<section className="todo">
  <Navbar name="My Project/" />

  <div className="todo__section">

    <h1 className="todo__section-title">Today Task</h1>

    <div className="todo__input-row">
      <input
        type="text"
        className="todo__input"
        placeholder="Enter something..."
        value={newTask}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />

      <div className="todo__input-group">
        <button className="todo__btn todo__btn--add" onClick={addTask}>
          <FaCirclePlus size={20} />
        </button>

        <button className="todo__btn todo__btn--delete-all" onClick={deleteAll}>
          Delete All
        </button>
      </div>
    </div>

    <ol className="todo__list">
      {task.map((t, index) => (
        <div key={index} className="todo__item">

          {/* Left section (checkbox + task text) */}
          <span className="todo__item-text">
            <button className='todo__item-text--checked'onClick={() => handleChecked(index)}>
              <CiCircleCheck  size={20}/>
            </button>

            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && saveModify(index)}
                  autoFocus
                />

                <button className="todo__btn todo__btn--confirm" onClick={() => saveModify(index)}>
                  Save
                </button>

                <button className="todo__btn todo__btn--cancel" onClick={cancelModify}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                {t.text}
                <button className="todo__btn todo__btn--edit" onClick={() => startModify(index)}>
                  <RiEdit2Fill /> Edit
                </button>
              </>
            )}
          </span>

          {/* Right section (time + delete) */}
          <span className="todo__item-time">
            {new Date(t.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}

            <button className="todo__btn todo__btn--delete" onClick={() => deleteTask(index)}>
              <MdDelete size={15} />
            </button>
          </span>
        </div>
      ))}
    </ol>
  </div>
</section>

  )
}

export default ToDoList;
