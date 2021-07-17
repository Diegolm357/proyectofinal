import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import {useState} from 'react';
import {  Button, ButtonGroup } from 'react-bootstrap';
function ItemCount() {
  const context = useContext(CartContext);
 
   const [contador, setContador] = useState(1);
  var texto = '';
 
  
   context.setQuantity(contador);
    

  function puestaCero(){
      setContador(0)
  }
   contador>=10?(texto='No hay mas Stock'):(texto='Stock disponible');
  
  return (
    <>
     <ButtonGroup className="mr-2" aria-label="First group">
    <Button onClick={()=>{setContador(contador-1);
    
    if(contador <= 0 ) (puestaCero());
}

   }>-</Button>

        <h1>  &nbsp; {contador} &nbsp;  </h1>
       
    <Button onClick={()=>{setContador(contador+1);
     if(contador >= 10) (puestaCero());
    
    }}>+</Button>
    </ButtonGroup>
   <h2>{texto}</h2>
   
    </>
  );
}

export default ItemCount;
