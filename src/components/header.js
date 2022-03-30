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
            <NavLink to='/'>ABOUT</NavLink>
            <NavLink to='/'>SERVICE</NavLink>
            <NavLink to='/'>GALLERY</NavLink>
            <NavLink to='/'>FAQ</NavLink>
            <NavLink to='/'>BLOG</NavLink>
            <NavLink to='/'>FOUNDATION</NavLink>
            <NavLink to='/'>CONTACT</NavLink>
            <NavLink to='/'>CAREERS</NavLink>
        </nav>
    </header>
  )
}
