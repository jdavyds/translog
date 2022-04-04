import React, {useState} from 'react'
import logo from './../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [sticky, setSticky] = useState(false)
    function handleScroll(e) {
        if(window.scrollY > 130) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }
    window.addEventListener('scroll', handleScroll)

    const [hamNav, setHamNav] = useState(false)
    function handleShow() {
        setHamNav(!hamNav)
    }
  return (
    <header className={sticky ? 'sticky' : ''}>
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
        <div className='hamDiv'>
                <FontAwesomeIcon icon={faBars}  onClick={handleShow}/> 
                <nav className={hamNav ? 'show' : ''}>
                    <NavLink  to='/' onClick={handleShow}>HOME</NavLink>
                    <NavLink  to='/about' onClick={handleShow}>ABOUT</NavLink>
                    <NavLink  to='/service' onClick={handleShow}>SERVICE</NavLink>
                    <NavLink  to='/gallery' onClick={handleShow}>GALLERY</NavLink>
                    <NavLink  to='/faq' onClick={handleShow}>FAQ</NavLink>
                    <NavLink  to='/blog' onClick={handleShow}>Blog</NavLink>
                    <NavLink  to='/foundation' onClick={handleShow}>FOUNDATION</NavLink>
                    <NavLink  to='/contact' onClick={handleShow}>CONTACT</NavLink>
                    <NavLink  to='/career' onClick={handleShow}>CAREERS</NavLink>
                </nav>
            </div>
    </header>
  )
}
