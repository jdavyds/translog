import React from 'react'
import logo from './../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>
      <main>
        <div>
            <img src={logo} alt="" />
            <p>TRANSLOG Energy is a fast-growing petroleum haulage service provider with expertise in facilitating large-scale transport services </p>
        </div>
        <nav>
            <b>Links</b>
            <Link to='/'>HOME</Link>
            <Link to='/'>ABOUT</Link>
            <Link to='/'>SERVICE</Link>
            <Link to='/'>GALLERY</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>BLOG</Link>
        </nav>
        <div>
          <p><FontAwesomeIcon className='icons' icon={faLocationDot} /> <span> Benin-Agbor Expressway, By Precious Wealth Petrol Station, Ekhor-Niro, Benin City, Edo State.</span> </p>
          <p><FontAwesomeIcon className='icons' icon={faPhone} /> <span>0915 207 5211, 0802 892 2836 </span></p>
          <p> <span><FontAwesomeIcon className='icons' icon={faEnvelope} />info@translogenergy.com </span></p>
          <p><FontAwesomeIcon className='icons' icon={faFacebookF} /> <FontAwesomeIcon className='icons' icon={faWhatsapp} /> <FontAwesomeIcon className='icons' icon={faInstagram} /></p>
        </div>
      </main>
      <section>© 2022. translog energy Limited. All rights reserved.</section>
    </footer>
  )
}