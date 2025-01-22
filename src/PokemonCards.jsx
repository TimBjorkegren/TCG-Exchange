import cards from './Cards.json'
import React from 'react'
import PokemonCard from './PokemonCard.jsx'
import './styling/PokeCard.css'

const PokemonCards = () => {
    console.log(cards)
    return (
        <section className="bg-blue-50 px-4 py-10">
            {
                cards.map((card) => (
                    <PokemonCard key={card.id} card={card} />
                ))
            }

        </section>
    )
}

export default PokemonCards