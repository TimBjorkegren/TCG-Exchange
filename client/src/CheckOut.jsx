import React, { useState, useEffect } from 'react'
import './styling/CheckOut.css'
import { useCart } from './CartManager';


const CheckOut = () => {

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const customerInfo = Object.fromEntries(formData.entries());

        const orderData = {
            customer: customerInfo,
            items: cartItems.map(item => ({
                id: item.product.id,
                name: item.product.nameOfCard,
                price: parseFloat(item.product.Price),
                quantity: item.quantity
            })),
            total: calcSum
        };

        fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert("Order submitted successfully")
                    console.log("order response", data)
                }
            })
            .catch(error => {
                console.error("error sumbitting order", error)
                alert("something went wrong with the order")
            })


    }
    const { cartItems, totalAmountCalcFunction } = useCart();
    const [calcSum, setCalcSum] = useState(0);

    useEffect(() => {
        setCalcSum(totalAmountCalcFunction());
    }, [cartItems, totalAmountCalcFunction]);

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
                <form method='post' onSubmit={handleSubmit}>
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
                    <div className='buttonCon'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>


            </div>
        </div >
    )
}

export default CheckOut