import React, {useState, useEffect } from 'react'
import Navbar from '../container/Navbar'
import './search.css'
import { CiSearch } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
const Search = () => {
  const [notComplete,SetComplete]=useState(()=>{
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved):[];
})


const [query,setQuery]=useState("");

useEffect(()=>{
  localStorage.setItem('tasks',JSON.stringify(notComplete))
},[notComplete])


const notCompleteTask = notComplete.filter((item)=>{
  if(!item.text)return false;
return item.text.toLowerCase().includes(query.toLowerCase())})


const [completeTask,setCompleteTask]=useState(()=>{
  const saved = localStorage.getItem('checkedTasks');
  return saved ? JSON.parse(saved):[];
})


useEffect(()=>{
  localStorage.setItem('checkedTasks',JSON.stringify(completeTask))
},[completeTask])

  const completeTasks = completeTask.filter((item)=>{
  if(!item.text)return false;
return item.text.toLowerCase().includes(query.toLowerCase())})

  return (
    <div className='search'>
    <Navbar name ='Search/'/>
    <h1>Search <CiSearch/> </h1>
    <input type="search"  placeholder='Search' 
    value={query}
    onChange={(e)=>setQuery(e.target.value)}
    />
    
    <div className='notComplete__task'>
      <h1 className='title'>To-do Task</h1>
    {notComplete.length ===0 && <p className='not-found'>No task to do </p>}
    {notCompleteTask.map((item,index)=>(
      
      <div key={index} className='todo__item'>
     <span className='todo__item-text'>
      <p>Not Complete</p>     
              {item.text}
     </span>
      <span className="todo__item-time">{new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </span>
      </div>
    ))}

     <div className=''> 
      
     <h1 className='title'>Complete task</h1>
      {completeTasks.map((item,index)=>(
          <div key={index} className='complete-task'>
                <span className='complete-task-text'>
                <p>Completed</p>     
                 {item.text}
                </span>
                <span className="todo__item-time">{new Date(item.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
         ))}
     </div>
    </div>
    </div>
  )
}

export default Search
