import { createContext} from 'react';

const CartContext = createContext();

const CartProvider = ({ children })=> {
   
   
    const addToCart =(item, contador)=>{
        let arr = { "cantidad": contador, "item": [item] }
        console.log(arr)
    }
   
    return (
        <CartContext.Provider value={addToCart}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider;
