import React, { useState, useEffect, use } from 'react'
import './styling/Carttab.css'
import { useCart } from './CartManager';
import { Link } from 'react-router';

const CartTab = () => {
    const { cartItems, deleteItemsFromCartFunction, addItemsToCartFunction } = useCart();

    return (
        <div className='cartTab'>
            <h1>Shopping Cart</h1>
            <div className='listCart'>
                {cartItems.length === 0 ? (
                    <p className='empty'>Your cart is empty</p>
                ) :
                    (cartItems.map((item) => (
                        <div className='item' key={item.product.id}>
                            <div className='image'>
                                <img src={item.product.image} ></img>
                            </div>
                            <div className='name'>
                                {item.product.nameOfCard}
                            </div>
                            <div className='totalPrice' id='totalPriceId' >
                                {parseFloat(item.product.Price) * item.quantity}$
                            </div>
                            <div className='quantity'>
                                <span className='minus' onClick={() => deleteItemsFromCartFunction(item.product)}> - </span>
                                <span className='quantityCart'>{item.quantity} </span>
                                <span className='plus' onClick={() => addItemsToCartFunction(item.product)}> + </span>
                            </div>
                        </div>
                    )))}
            </div>
            <div className='btn'>
                <button className='close'>CLOSE</button>
                <Link to='/checkout' className='checkOut'>CHECK OUT</Link>
            </div>
        </div>
    )
}

export default CartTab