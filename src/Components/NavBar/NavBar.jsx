import React, { useRef } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.jpg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const NavBar = () => {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="" />
      <img className='nav-mob-open' src={menu_open} alt="" onClick={openMenu}/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-mob-close" onClick={closeMenu} />
        <li><AnchorLink className='anchor-link' href='#hero'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contacta conmigo</p></AnchorLink></div>
    </div>
  )
}
