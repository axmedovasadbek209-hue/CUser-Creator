import React from 'react'
import './Navbar.css'

function Navbar({Users}) {
  return (
    <div className='navbar'>
        <div className='navbar-container container'>
            <h1 className='navbar-logo'>CUser</h1>
            <h3 className='navbar-counter'> { Users > 0 ? `You have: ${Users} users` : 'No users:(' }</h3>
        </div>
    </div>
  )
}

export default Navbar