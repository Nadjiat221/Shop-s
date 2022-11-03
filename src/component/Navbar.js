import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';



const Navbar = () => {
    const navStyle = {
        color:'white'
      }
      const onClick = () => {
        console.log('click')
      }
  return (
    <nav>
      <h3>shop</h3>
      <ul className='nav-links'>
        <Link style={navStyle} to ='/'>
          <li>Home</li>
        </Link>

        <Link style={navStyle} to ='/AddItem'>
          <li><Button  onClick={onClick}
          /></li>
        </Link>

      </ul>
    </nav>

  )
}

export default Navbar
