    import React, { useState } from "react";
    import Login from "./Login";

    export default function Shop(props) {
        let ShopItems = props.items;
        const [cart, setCart] = useState([]);
        const [amountPaid, setAmountPaid] = useState(0);
        const [receipt, setReceipt] = useState(null);

        function addItem(item) {
            setCart((prevCart) => {
                const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
                if (existingItemIndex !== -1) {
                    const updatedCart = [...prevCart];
                    updatedCart[existingItemIndex].quantity += 1;
                    return updatedCart;
                } else {
                    return [...prevCart, { ...item, quantity: 1 }];
                }
            });
        }

        const calculateTotal = () => {
            return cart.reduce((total, item) => total + item.price * item.quantity, 0);
        };

        const handlePayment = () => {
            const total = calculateTotal();
            const change = amountPaid - total;

            if (change < 0) {
                alert("Please pay the total amount or more.");
                return;
            }

            const receiptDetails = {
                items: cart,
                total: total,
                amountPaid: amountPaid,
                change: change
            };
            setReceipt(receiptDetails);
            setCart([]); // Clear the cart after payment
        };

        const renderItems = () => {
            return (
                <div className="item-container">
                    {ShopItems.map((item) => {
                        return (
                            <div className="item" key={item.id}>
                                <p>{item.name}</p>
                                <p>Price per piece: ₱{item.price}</p>
                                <button onClick={() => addItem(item)}>Add to cart!</button>
                            </div>
                        );
                    })}
                </div>
            );
        };

        const renderCart = () => {
            return (
                cart.map((product) => {
                    return (
                        <div key={product.id}>
                            <p>{product.name} ({product.quantity}x) Price: ₱{(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    );
                })
            );
        };

        if (props.isLoggedIn === false) {
            return <Login />;
        } else {
            // Inline styles for background image
            const shopStyle = {
                backgroundSize: 'cover', // Cover the entire area
                backgroundPosition: 'center', // Center the image
                minHeight: '100vh', // Minimum height to cover the viewport
                padding: '20px', // Padding around the content
                color: 'black', // Text color for better visibility
            };

            return (
                <div style={shopStyle}>
                    <h1>Welcome to Baguio City Public Market!</h1>
                    <ul>
                        {renderItems()}
                    </ul>

                    <h4>These are the cart items:</h4>
                    <div className="cart-container">
                        <div className="cart-items">
                            <ul>
                                {renderCart()}
                            </ul>
                        </div>
                        <div className="total">
                            <h4>Total: ₱{calculateTotal().toFixed(2)}</h4>
                            <input 
                                type="number" 
                                placeholder="Amount Paid" 
                                onChange={(e) => setAmountPaid(Number(e.target.value))} 
                            />
                            <button onClick={handlePayment}>Pay</button>
                        </div>
                    </div>
                    <center>
                    {receipt && (
                        <div className="receipt">
                            <h2>Receipt</h2>
                            <h3>Items Purchased:</h3>
                            <ul>
                                {receipt.items.map((product) => (
                                    <li key={product.id}>
                                        {product.name} ({product.quantity}x) - ₱{(product.price * product.quantity).toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                            <p>Total Price: ₱{receipt.total.toFixed(2)}</p>
                            <p>Amount Paid: ₱{receipt.amountPaid.toFixed(2)}</p>
                            <p>Change: ₱{receipt.change.toFixed(2)}</p>
                        </div>
                    )}
                    </center>
                </div>
            );
        }
    }