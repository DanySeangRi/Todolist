
import './sidebar.css'
import { AiFillRobot } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCirclePlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { BsInbox } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { IoToday } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import React,{useState} from 'react'
import { VscLayoutSidebarRight } from "react-icons/vsc";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import List from '../../components/List';


const Sidebar = () => {
 
const [toggle,setToggle] =useState(true)
  return (
       
  <>
    <span className={`toggle ${toggle ?'open':'closed'} `} 
    onClick={()=>setToggle(!toggle)}>
      {
        toggle ? <VscLayoutSidebarLeft side={20}/>
        :<VscLayoutSidebarRight side ={20}/>
      }
      </span> 

      <nav className={`list-navbar ${toggle ? 'open':'closed'} `}>
                     {/* this open and closed combination with css*/}
        <div className="list-navbar__container">
          <div className="list-navbar__profile">
            <span className="list-navbar__profile-logo">
              <a href="" className="m-2"><AiFillRobot size={20} /></a>
              <button>Chamroeurn</button>
              <div className='arrow'><RiArrowDropDownLine size={20} /></div>
            </span>
          </div>
          <div className="list-navbar__noti">
            <IoIosNotifications size={20}/>
          </div>
        </div>

        <div className='list-navbar__addTask'>
          <List icon={FaCirclePlus} name="Add Task" to='./'/>
        </div>

        <div className='list-navbar__feature'>
       
          <List icon={BsInbox} name="Inbox" />
          <List icon={IoToday} name="Today" />
          <List icon={SlCalender} name="Upcoming" />
          <List icon={CiBoxList} name="Filter & Label"  />
          <List icon={CiCircleCheck} name="Checked" to='./checked' />
  
        </div>
    </nav>
</>


  )
}

export default Sidebar
