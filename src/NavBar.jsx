import React from 'react'
import './styling/Navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className='navLeft'>
                <a href='/' className='logo'>TCG-Exchange</a>
            </div>
            <div className='navCenter'>
                <a href='/'>Shop</a>
            </div>
            <div className='navRight'>
                <a href='/'>Shopping Cart</a>
            </div>
        </nav>
    )
}

export default NavBar