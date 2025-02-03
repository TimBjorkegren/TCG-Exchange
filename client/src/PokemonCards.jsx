import cards from './Cards.json'
import React from 'react'
import PokemonCard from './PokemonCard.jsx'
import './styling/PokeCard.css'

const PokemonCards = () => {
    console.log(cards)



    return (
        <section className="">
            {
                cards.map((card) => (
                    <PokemonCard key={card.id} card={card} />
                ))
            }

        </section>
    )
}

export default PokemonCards