import React, { useState, useEffect } from 'react'
import './styling/CheckOut.css'
import { useCart } from './CartManager';


const CheckOut = () => {

    function handleSumbit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        //fetch('/some-api', { method: form.method, body: formData });

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);


    }
    const { cartItems, totalAmountCalcFunction } = useCart();
    const [calcSum, setCalcSum] = useState(0);

    useEffect(() => {
        const sum = totalAmountCalcFunction();
        setCalcSum(sum);
    }, [cartItems])

    return (
        <div className='con'>
            <div className='CheckOutContainer'>
                <div className='shopCart'>
                    <p>Items in your cart:</p>
                    {cartItems.length > 0 ? (
                        <ul>
                            {cartItems.map((item, index) => (
                                <li key={index}>{item.product.nameOfCard} - Quantity:{item.quantity} - {item.product.Price} </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No items in your cart</p>
                    )}
                </div>
                <form method='post' onSubmit={handleSumbit}>
                    <label>
                        Credit Card Number
                        <input name='creditcard' type='text'></input>
                    </label>
                    <label>
                        Address
                        <input name='address' type='text'></input>
                    </label>
                    <label>
                        PhoneNumber
                        <input name='PhoneNumber' type='text'></input>
                    </label>

                    <div className='totalsum'>
                        <p> Your total price: ${(calcSum)} </p>
                    </div>
                    <button type='submit'>Submit</button>
                </form>


            </div>
        </div >
    )
}

export default CheckOut