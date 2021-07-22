import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import {useState} from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function ItemCount(item) {
 
  const context = useContext(CartContext);  
  const [contador, setContador] = useState(1);
  var texto = '';
  
   contador>=10?(texto='No hay mas Stock'):(texto='Stock disponible');
   
    
  return (
    <>
     <ButtonGroup className="mr-2" aria-label="First group">
        <Button 
         
          onClick={() => {
            if (contador > 1) {
              
            
           
              setContador(contador - 1);
                
            }

          }}>-</Button>

        <h1>  &nbsp; {contador} &nbsp;  </h1>
       
        <Button  onClick={() => {
          
          setContador(contador + 1);
     console.log(item)
    
        }}>+</Button>
                
    </ButtonGroup>
      <h2>{texto} </h2>
      <Button onclick={()=>{context.addToCart(item, contador)}}>Agregar</Button>
   
    </>
   
  );
 
}

export default ItemCount;
