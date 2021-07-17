import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([0]);
    const [quantity, setQuantity] = useState();
    const [imagen, setImagen] = useState([0]);
    const [precio, setPrecio] = useState([0]);
    const [objeto, setObjeto]=useState([0]);
   

    function sumar() {
        setObjeto([{ ...cart, cart }, {...quantity, quantity}, {...imagen, imagen },{...precio, precio}])
console.log(objeto) }
    
    

    return (
        <CartContext.Provider value={{sumar, imagen, setImagen, precio, setPrecio, quantity, setQuantity, cart, setCart }}>
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