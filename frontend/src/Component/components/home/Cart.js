import React, { useState } from 'react';

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10, quantity: 1 },
        { id: 2, name: 'Product 2', price: 20, quantity: 2 },
        { id: 3, name: 'Product 3', price: 30, quantity: 3 }
    ]);

    const increaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (itemId) => {
        const updatedCartItems = cartItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCartItems);
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price * item.quantity;
        });
        return total;
    };

    return (
        <div className="container">
            <h1>Shopping Cart</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td>Image</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button className="btn btn-sm btn-primary" onClick={() => decreaseQuantity(item.id)}>-</button>
                                {item.quantity}
                                <button className="btn btn-sm btn-primary" onClick={() => increaseQuantity(item.id)}>+</button>
                            </td>
                            <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h4>Total: ${calculateTotal()}</h4>
                <button className="btn btn-primary">Checkout</button>
            </div>
        </div>
    );
};

export default ShoppingCart;