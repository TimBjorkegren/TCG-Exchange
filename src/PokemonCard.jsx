import React, { useState, useEffect, use } from 'react'
import { useCart } from './CartManager';
import './styling/PokeCard.css'
import cards from './Cards.json'

const PokemonCard = ({ card }) => {

    const [cartItems, updateCartItems] = useState([]);
    const { addItemsToCartFunction } = useCart();

    useEffect(() => {
        updateCartItems(cards);
    }, [])


    return (
        <div className="pokemonContainer">
            <img className="pokemonImage" src={card.image} ></img>
            <div className="pokemonName">{card.nameOfCard} </div>
            <div className="pokemonGraded">{card.Graded} </div>
            <div className="pokemonRarity">
                {card.Rarity}
            </div>
            <div className="pokemonGraphics">{card.Graphics} </div>
            <div className="pokemonPrice">{card.Price} </div>
            <button className='add-to-cart' onClick={() => addItemsToCartFunction(card)}>Add To Cart</button>

        </div>
    )
}

export default PokemonCard