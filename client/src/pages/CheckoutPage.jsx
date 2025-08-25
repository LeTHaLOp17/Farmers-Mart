import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const CheckoutPage = () => {
    const location = useLocation();
    const { orderData } = location.state || {};

    if (!orderData) {
        return <div>No order data found. Please try again.</div>;
    }
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        paymentMethod: 'Cash On Delievery',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Thank you for your purchase! You will receive an email confirmation shortly.");
         window.location.href = '/'; 
    };

    return (
        <>
            <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
                <h1>Checkout Summary</h1>
                <h3>Buyer Email: {orderData.buyerEmail}</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Seller Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.items.map((item, index) => (
                            <tr key={index}>
                                <td>{item.productName}</td>
                                <td>{item.productPrice}</td>
                                <td>{item.quantity}</td>
                                <td>{item.totalPrice}</td>
                                <td>{item.sellerEmail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>Thank you for shopping with us!</p>
            </div>
            <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
                <h1>Checkout</h1>

                <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', fontSize: '16px', }}
                        />
                    </div>

                    {/* Address */}
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>
                            Address:
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            style={{ width: '100%', padding: '10px', fontSize: '16px', resize: 'vertical' }}
                        />
                    </div>

                    {/* Payment Method */}
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="paymentMethod" style={{ display: 'block', marginBottom: '5px' }}>
                            Payment Method:
                        </label>
                        <select
                            id="paymentMethod"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                        >
                            <option value="creditCard">Cash On Delievery</option>
                           
                        </select>
                    </div>

                   
                    

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '10px',
                            fontSize: '18px',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </>
    );
};

export default CheckoutPage;