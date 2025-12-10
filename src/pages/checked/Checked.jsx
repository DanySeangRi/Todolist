import React, { useState } from 'react';
import './checked.css'
import { MdDelete } from "react-icons/md";
import Navbar from '../container/Navbar';
import { FaCircleCheck } from "react-icons/fa6";
function Checked() {
  const [checkedTasks, setCheckedTasks] = useState(() => {
    const saved = localStorage.getItem("checkedTasks");
    return saved ? JSON.parse(saved) : [];
  });

  // Optional: keep localStorage in sync if Checked modifies tasks

function deleteAll(){
  setCheckedTasks([])
}

function deleteTask(index) {
   setCheckedTasks(checkedTasks.filter((_, i) => i !== index));
  }
  return (
    <>
     
    <div className='checked-container'>
      <Navbar name ='Task complete/'/>
     
     <div className='title'>
       <h1>Tasks Completed</h1>
      <button onClick={deleteAll}> deleteAll</button>
     </div>
      <div >
        <ol >
        {checkedTasks.map((t, index) => (
        <div key={index} className='list'> 
          <span>
             <button ><FaCircleCheck /></button>   {t.text}
          </span>
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
    </>
   
  );
}

export default Checked;

