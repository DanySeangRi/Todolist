
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

const Sidebar = () => {
 
const [toggle,setToggle] =useState(true)
  return (
       
  <div>
    <span className={`toggle ${toggle ?'open':'closed'}`} 
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
          <Feature icon={FaCirclePlus} name="Add Task" />
        </div>

        <div className='list-navbar__feature'>
          <Feature icon={CiSearch} name="Search" />
          <Feature icon={BsInbox} name="Inbox" />
          <Feature icon={IoToday} name="Today" />
          <Feature icon={SlCalender} name="Upcoming" />
          <Feature icon={CiBoxList} name="Filter & Label" />
          <Feature icon={CiCircleCheck} name="Checked" />
        </div>
      </nav>
</div>


  )
}

export default Sidebar
