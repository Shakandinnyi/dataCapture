import React from 'react'
import {FaCamera} from 'react-icons/fa'
import {FaMobileAlt} from 'react-icons/fa'
import {FaTabletAlt} from 'react-icons/fa'
import {FaLaptop} from 'react-icons/fa'
const Header = ({title,width}) => {
  return (
   
    <header className="Header">
       <FaCamera className='icon2'/>
    <h1>{title}</h1>
    {width < 768 ? <FaMobileAlt />
        : width < 992 ? <FaTabletAlt />
            : <FaLaptop />}
</header>
   
   
  )
}


export default Header