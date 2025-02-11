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
            <p>footer!</p>
        </footer>
    </div>
  )
}
