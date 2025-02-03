import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import NavBar from "./NavBar";
import ShoppingContainer from "./shoppingContainer";
import MainPage from "./MainPage";
import PokemonCards from './PokemonCards';
import CartTab from './CartTab';
import CartManager from './CartManager';
import CheckOut from './CheckOut';


// Skapa en sida där du kan köpa och om man hinner sälja pokemon/någon typ av kort
//Målet är att kunna lägga produkter i en varukorg och sedan gå till checkout på en annan sida

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartManager>
        <NavBar />
        <Routes>
          <Route index element={<MainPage />} />
          <Route path='/shop' element={<PokemonCards />} />
          <Route path='checkout' element={<CheckOut />} />
        </Routes>
      </CartManager>
    </BrowserRouter>
  </StrictMode>,
)

/*
<PokemonCards />
<NavBar /> */