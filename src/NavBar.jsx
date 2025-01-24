import React, { useState, useEffect } from 'react'
import './styling/Navbar.css'
import { useCart } from './CartManager';

const NavBar = ({ }) => {
    const [showCart, setShowCart] = useState(false);
    const { cartItems } = useCart();

    const totalQuantity = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => acc + item.quantity, 0) : 0;
    console.log("total", totalQuantity)
    console.log("what items", cartItems)

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
                <a href='/' className='logo'><img src="https://cdn.pixabay.com/photo/2019/11/27/14/06/pokemon-4657023_1280.png" alt="TCH-EXCHANGE" /></a>
            </div>
            <div className='navCenter'>
                <a href='/'>Shop</a>
            </div>
            <div className='navRight'>
                <button onClick={() => setShowCart(!showCart)}>
                    <i className="fas fa-shopping-cart"></i>
                </button>
                <span>{totalQuantity} </span>
            </div>

            {showCart && (
                <div className="cartTab">
                </div>
            )}
        </nav>
    )
}

export default NavBar