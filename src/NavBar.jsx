import React, { useState, useEffect } from 'react'
import './styling/Navbar.css'

const NavBar = () => {
    const [showCart, setShowCart] = useState(false);

    useEffect(() => {
        if (showCart) {
            document.body.classList.add('showCart');
        } else {
            document.body.classList.remove('showCart');
        }

        return () => {
            document.body.classList.remove('showCart');
        };
    }, [showCart]);



    return (
        <nav className="navbar">
            <div className='navLeft'>
                <a href='/' className='logo'>TCG-Exchange</a>
            </div>
            <div className='navCenter'>
                <a href='/'>Shop</a>
            </div>
            <div className='navRight'>
                <button onClick={() => setShowCart(!showCart)}>
                    {showCart ? 'Close Cart' : 'Show Cart'}
                </button>
            </div>

            {showCart && (
                <div className="cartTab">
                </div>
            )}
        </nav>
    )
}

export default NavBar