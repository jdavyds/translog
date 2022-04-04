import React from 'react'
import logo from './../assets/logo.png'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header>
        <nav className='logo'>
            <img src={logo} alt="" />
        </nav>
        <nav className='navs'>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/service'>SERVICE</NavLink>
            <NavLink to='/gallery'>GALLERY</NavLink>
            <NavLink to='/faq'>FAQ</NavLink>
            <NavLink to='/blog'>BLOG</NavLink>
            <NavLink to='/foundation'>FOUNDATION</NavLink>
            <NavLink to='/contact'>CONTACT</NavLink>
            <NavLink to='/career'>CAREERS</NavLink>
        </nav>
    </header>
  )
}
