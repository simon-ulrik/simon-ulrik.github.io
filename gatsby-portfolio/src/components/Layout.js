import React from 'react'
import Navbar from './Navbar'
import '../styles/global.sass'

export default function Layout({ children, location }) {
  return (
    <div className='layout'>
        <Navbar location={location} />
        <div className='content'>
            { children }
        </div>
        <footer>
            <p>Email: <a href="mailto:simon.ulrik.j@gmail.com?" target="_blank">simon.ulrik.j@gmail.com</a></p>
            <p>Phone: <a href="tel:+46768882560">+46 768882560</a></p>
            <p>Instagram: <a href='https://www.instagram.com/simons.pictures/' target="_blank">@simons.pictures</a></p>
        </footer>
    </div>
  )
}
