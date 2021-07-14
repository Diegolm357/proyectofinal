import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [imagen, setImagen] = useState([]);
    const [price, setPrice] = useState();
    
    console.log(cart);
   console.log(quantity)
    return (
        <CartContext.Provider value={{imagen, setImagen, price, setPrice, quantity, setQuantity, cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
}

function CartConsumer({ defaultValue = [], children }) {
    return (
        <CartContext.Consumer>
            {children}
        </CartContext.Consumer>
    );
}

export { CartProvider, CartConsumer, CartContext };