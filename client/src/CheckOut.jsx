import React, { useState, useEffect } from 'react'
import './styling/CheckOut.css'
import { useCart } from './CartManager';


const CheckOut = () => {

    const [orderDetails, setOrderDetails] = useState(null);
    const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const customerInfo = Object.fromEntries(formData.entries());

        console.log("customer info:", customerInfo)

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
                console.log("Full response from server:", data);
                if (data) {
                    setOrderDetails(data.order)
                    setIsOrderSubmitted(true)
                    alert("Order submitted successfully")
                    console.log("order response", data)
                    console.log(customerInfo);
                    console.log("Customer Name:", data.order.customer.NameOfCustomer);
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
                {isOrderSubmitted ? (
                    <div className='receipt'>
                        <h3>Receipt</h3>
                        <p><strong>Customer Name:</strong><br /> {orderDetails.customer.nameOfCustomer}</p>
                        <p><strong>Address:</strong> {orderDetails.customer.address}</p>
                        <p><strong>Phone Number:</strong> {orderDetails.customer.phoneNumber}</p>
                        <h4>Items:</h4>
                        <ul>
                            {orderDetails.items.map((item, index) => (
                                <li key={index}>
                                    {item.name} - Quantity: {item.quantity} - Price: ${item.price} - Total: ${item.price * item.quantity}
                                </li>
                            ))}
                        </ul>
                        <h4>Total Amount: ${orderDetails.total}</h4>
                    </div>
                ) : (
                    <div className='shopCart'>
                        <p>Items in your cart:</p>
                        {cartItems.length > 0 ? (
                            <ul>
                                {cartItems.map((item, index) => (
                                    <li key={index}>{item.product.nameOfCard} - Quantity: {item.quantity} - {item.product.Price}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No items in your cart</p>
                        )}
                    </div>
                )}
                {!isOrderSubmitted && (
                    <form method='post' onSubmit={handleSubmit}>
                        <label>
                            First and Last Name
                            <input name='NameOfCustomer' type='text' />
                        </label>
                        <label>
                            Credit Card Number
                            <input name='creditcard' type='text' />
                        </label>
                        <label>
                            Address
                            <input name='address' type='text' />
                        </label>
                        <label>
                            PhoneNumber
                            <input name='PhoneNumber' type='text' />
                        </label>

                        <div className='totalsum'>
                            <p>Your total price: ${calcSum}</p>
                        </div>
                        <div className='buttonCon'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default CheckOut