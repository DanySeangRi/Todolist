import React from 'react'
import Navbar from '../container/Navbar'
import './search.css'
import { CiSearch } from "react-icons/ci";
const Search = () => {
  return (
    <div className='search'>
    <Navbar name ='Search/'/>
    <h1>Search <CiSearch/> </h1>
    <input type="search"  placeholder='Search'/>
    </div>
  )
}

export default Search
