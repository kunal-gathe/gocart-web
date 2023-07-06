import React from 'react'
import ColorMode from '../ColorMode'
import '../Navbar/Navbar.css'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import { useFilterContex } from '../../context/filterContex';
import { useCartContext } from '../../context/cartContex';

function Navbar() {
  const {cart} = useCartContext();
  const {
    filters:{text} ,
     getsearchvalue
    } = useFilterContex();
  return (
    <div className='header'>
      <ColorMode   />
      <div className='logo-container'>
        <FiShoppingBag className='logo-icon' / >
        <h1 className='logo'>Gocart</h1>
      </div>

      <div className='nav-link'>
        <ul className='nav-items'>
          <li className="item home" >
            <NavLink to='/'>
              Home
            </NavLink>
          </li>
          <li className="item">
            <NavLink to='/about'>
              About
            </NavLink>
          </li>
          <li className="item">
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </li>
          <li className="item">
            <NavLink to='/products'>
              Products
            </NavLink>
          </li>
          <li className="item">
            <NavLink to='/cart'>
              <FiShoppingCart className='cart-icon' />
              <span className='cart-count'>{cart.length}</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className='serach-container'>
      <NavLink to="/products">
        <form onSubmit={(e) => e.preventDefault()} >
          <input className='search-box' type="text" name="text" value={text} onChange={getsearchvalue} placeholder='Search' />
        </form>
      </NavLink>
      </div>
    </div>
  )
}


export default Navbar
