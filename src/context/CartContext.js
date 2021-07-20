import { createContext, useState } from 'react';

const CartContext = createContext();

function CartProvider({ defaultValue = [], children }) {
    const [cart, setCart] = useState([0]);
    const [quantity, setQuantity] = useState(0);
    const [imagen, setImagen] = useState([0]);
    const [precio, setPrecio] = useState([0]);
    const [objeto, setObjeto]=useState([0]);
    const [contador, setContador] = useState(0);
    console.log(cart)
    console.log(quantity)
    console.log(precio)
    console.log(imagen)
console.log(objeto)

    
var texto = '';
  

function puestaCero(){
    setContador(0)
}
 contador>=10?(texto='No hay mas Stock'):(texto='Stock disponible');
 
    
    
    const  suma=() => {
        setContador(contador + 1);
        if(contador >= 10) (puestaCero());
    }
    
    
    const resta = () => {
        setContador(contador - 1);
           
        if (contador <= 0) (puestaCero());

    }
    
    
    
    
    
    
    
    

    function sumar() {
        setObjeto([{ ...cart, cart }, {...quantity, quantity}, {...imagen, imagen },{...precio, precio}])
 }
 
    
    return (
        <CartContext.Provider value={{ suma, resta, contador, sumar, imagen, setImagen, precio, setPrecio, quantity, setQuantity, cart, setCart }}>
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