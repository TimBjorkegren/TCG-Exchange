import React from 'react'
import './styling/PokeCard.css'

const PokemonCard = ({ card }) => {
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
            <button className='add-to-cart'>Add To Cart</button>

        </div>
    )
}

export default PokemonCard