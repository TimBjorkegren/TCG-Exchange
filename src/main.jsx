import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from "./NavBar";
import ShoppingContainer from "./shoppingContainer";
import MainPage from "./MainPage";
import PokemonCards from './PokemonCards';
import CartTab from './CartTab';
import CartManager from './CartManager';

// Skapa en sida där du kan köpa och om man hinner sälja pokemon/någon typ av kort
//Målet är att kunna lägga produkter i en varukorg och sedan gå till checkout på en annan sida

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartManager>
      <NavBar />
      <PokemonCards />
      <CartTab />
      <createRoot />
      <BrowserRouter>
        <Routes>

        </Routes>
      </BrowserRouter>
    </CartManager>
  </StrictMode>,
)
