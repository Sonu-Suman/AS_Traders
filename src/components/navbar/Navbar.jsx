import React, { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import trading from '../../assets/trading.png'


const Menu = () => (
        <>
          <p><a href="#home">Home</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#blog">Learn</a></p>
          <p><a href="#features">Case studies</a></p>
        </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='trader__navbar'>
      <div className="trader__navbar-links">
        <div className="trader__navbar-links_logo">
          <img src={trading} alt="logo" />
        </div>
        <div className="trader__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#possibility">Services</a></p>
          <p><a href="#features">Learn</a></p>
          <p><a href="#blog">Case studies</a></p>
        </div>
      </div>
      <div className="trader__navbar-sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
        {/* <button onClick={signUp} type='button'>Sign Up</button> */}
      </div>
      <div className="trader__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/> 
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/> 
        }
        {toggleMenu && (
          <div className='trader__navbar-menu_container scale-up-center'>
            <div className="trader__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="trader__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>
          </div>
          )}
      </div>
    </div>
  )
}

export default Navbar;
