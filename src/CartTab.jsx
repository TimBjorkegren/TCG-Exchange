import React, { useState, useEffect, use } from 'react'
import './styling/Carttab.css'
import cards from './Cards.json'

const CartTab = () => {
    const [cartItems, updateCartItems] = useState([]);

    useEffect(() => {
        updateCartItems(cards);
    }, [])

    return (
        <div className='cartTab'>
            <h1>Shopping Cart</h1>
            <div className='listCart'>
                {cartItems.map((item) => (
                    <div className='item'>
                        <div className='image'>
                            <img src={item.image} ></img>
                        </div>
                        <div className='name'>
                            {item.nameOfCard}
                        </div>
                        <div className='totalPrice' id='totalPriceId' >
                            {item.Price}
                        </div>
                        <div className='quantity'>
                            <span className='minus'> - </span>
                            <span className='quantityCart'>1</span>
                            <span className='plus'> + </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className='btn'>
                <button className='close'>CLOSE</button>
                <button className='checkOut'>CHECK OUT</button>
            </div>
        </div>
    )
}

export default CartTab