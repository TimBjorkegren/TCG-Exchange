import React, { createContext, useState, useContext } from 'react'
import cards from './Cards.json'
import CartTab from './CartTab';
import NavBar from './NavBar';


const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
}

export const CartManager = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const addItemsToCartFunction = (card) => {
        const alreadyInCart = cartItems.find(item => item.product.id === card.id);
        if (alreadyInCart) {
            const updateItemQuantity = cartItems.map(item => item.product.id === card.id ? {
                ...item, quantity: item.quantity + 1
            } : item); setCartItems(updateItemQuantity);
            console.log(`Added another ${card.nameOfCard} to the cart. New quantity: ${alreadyInCart.quantity + 1}`)
        } else {
            setCartItems([...cartItems, { product: card, quantity: 1 }])
            console.log(`${card.nameOfCard} added to the cart. Quantity: 1`);
        }
    }

    const deleteItemsFromCartFunction = (card) => {
        const verifyCart = cartItems.find(item => item.product.id === card.id);
        if (verifyCart) {
            const removeQuantity = cartItems.map(item => item.product.id === card.id ? {
                ...item, quantity: item.quantity - 1
            } : item).filter(item => item.quantity > 0);
            setCartItems(removeQuantity)
            console.log(`${card.nameOfCard} was removed ${removeQuantity}`)
        }
    }

    const totalAmountCalcFunction = () => {
        return cartItems.reduce((total, item) => total + item.product.Price * item.quantity, 0)
    }


    return (
        <CartContext.Provider value={{ cartItems, addItemsToCartFunction, deleteItemsFromCartFunction, totalAmountCalcFunction }}>
            {children}
            <CartTab cartItems={cartItems} />
            <NavBar cartItems={cartItems} />
        </CartContext.Provider>
    )
}

export default CartManager