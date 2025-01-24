import React, { useState, useEffect } from 'react'
import cards from './Cards.json'

const [cartItems, setCartItems] = useState([]);

const addItemsToCartFunction = (card) => {
    const alreadyInCart = cartItems.find(item => item.product.id === card.id);
    if (alreadyInCart) {
        const updateItemQuantity = cartItems.map(item => item.product.id === card.id ? {
            ...item, quantity: item.quantity + 1
        } : 1); setCartItems(updateItemQuantity);
    } else {
        setCartItems([...cartItems, { product: card, quantity: 1 }])
    }
}

const CartManager = () => {
    return (
       
    )
}

export default CartManager