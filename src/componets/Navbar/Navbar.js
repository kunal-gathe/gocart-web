import React from 'react'
// import ColorMode from '../ColorMode'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart,FiShoppingBag } from "react-icons/fi";

function Navbar() {
  return (
    <div className='header'>
        {/* <ColorMode   /> */}
        <div className='logo-container'>
        <FiShoppingBag className='logo-icon'/>
        <h1 className='logo'>Gocart</h1>
        </div>

      <div className='nav-link'>
        <ul className='nav-items'>
          <li className = "item home" >
            <NavLink to='/'>
              Home
            </NavLink>
          </li>
          <li className = "item">
            <NavLink to='/about'>
              About
            </NavLink>
          </li>
          <li className = "item">
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </li>
          <li className = "item">
            <NavLink to='/products'>
              Products
            </NavLink>
          </li>
          <li className = "item">
            <NavLink to='/cart'>
            <FiShoppingCart className='cart-icon' />
            <span className='cart-count'>10</span>
            </NavLink>
          </li>
        </ul>

        </div>
      
      <div className='serach-container'>
        <input className='search-box' type='text' placeholder='Search' />
        <button className='search-btn'><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Navbar
