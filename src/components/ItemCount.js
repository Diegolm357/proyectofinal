import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

import { Button, ButtonGroup } from 'react-bootstrap';

function ItemCount() {
 
  const context = useContext(CartContext);  
  
    
  return (
    <>
     <ButtonGroup className="mr-2" aria-label="First group">
        <Button 
         
          onClick={() => {
            context.resta()
           }

   }>-</Button>

        <h1>  &nbsp; {context.contador} &nbsp;  </h1>
       
        <Button  onClick={() => {
          context.suma()
        }}>+</Button>
                
    </ButtonGroup>
   <h2>{context.texto}</h2>
   
    </>
   
  );
 
}

export default ItemCount;


