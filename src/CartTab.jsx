import React from 'react'
import './styling/Carttab.css'

const CartTab = () => {
    return (
        <div className='cartTab'>
            <h1>Shopping Cart</h1>
            <div className='listCart'>
                <div className='item'>
                    <div className='image'>
                        <img src="/"></img>
                    </div>
                    <div className='name'>
                        Name
                    </div>
                    <div className='totalPrice'>
                        200$
                    </div>
                    <div className='quantity'>
                        <span className='minus'> - </span>
                        <span>1</span>
                        <span className='plus'> + </span>
                    </div>
                </div>
            </div>
            <div className='btn'>
                <button className='close'>CLOSE</button>
                <button className='checkOut'>CHECK OUT</button>
            </div>
        </div>
    )
}

export default CartTab