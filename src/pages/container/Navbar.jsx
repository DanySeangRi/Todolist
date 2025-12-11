import React from 'react'
import { FaRegComments } from "react-icons/fa6";
import { BiDotsHorizontal } from "react-icons/bi";
import { CiShare1 } from "react-icons/ci";
import { CiBoxList } from "react-icons/ci"
import List from '../../components/List';
import './navbar.css'
const Navbar = (props) => {
  const name = props.name;
  return (
    <>
     <nav className='navbar '> 
      <div className='navbar-right'> 
          <p>{name}</p>
      </div>
      <div className='navbar-left  '>
         <List icon={CiShare1 } name="Search" /> 
         <List icon={CiBoxList } name="Display" />
         <List icon={FaRegComments}  /> 
         <List icon={ BiDotsHorizontal} />
      </div> 
          
    </nav>
    </>
  )
}

export default Navbar
