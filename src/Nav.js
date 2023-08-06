import React from 'react'
import {Link } from 'react-router-dom';



const Nav = ({search,setSearch}) => {
  return (
    <nav className="Nav">
          <form className="searchForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="search">Search Issues</label>
                <input id="search"
                        placeholder="Search Issues"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        required
                        className="PostPage button"
                />
             </form>    
           <ul>
                <li><Link to="/">Home</Link></li>
               
                
                <li><Link to="/report">Report </Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                
                
                
            </ul>
   
      
        
   
    </nav>
  
  )
}

export default Nav