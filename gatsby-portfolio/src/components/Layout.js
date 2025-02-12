import React from 'react'
import Navbar from './Navbar'
import '../styles/global.sass'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='content'>
            { children }
        </div>
        <footer>
            <p>Email: simon.ulrik.j@gmail.com</p>
            <p>Phone: +46768882560</p>
            <p>Instagram: <a href='https://www.instagram.com/simons.pictures/'>@simons.pictures</a></p>
        </footer>
    </div>
  )
}
