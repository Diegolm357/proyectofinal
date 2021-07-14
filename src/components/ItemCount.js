import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import {useState} from 'react';
import {  Button, ButtonGroup } from 'react-bootstrap';
function ItemCount() {
  const context = useContext(CartContext); 
   const [contador, setcontador] = useState(1);
   var texto='';
  function puestaCero(){
      setcontador(0)
  }
   contador>=10?(texto='No hay mas Stock'):(texto='Stock disponible');
  
  return (
    <>
     <ButtonGroup className="mr-2" aria-label="First group">
    <Button onClick={()=>{setcontador(contador-1);
    
    if(contador <= 0 ) (puestaCero());
}

   }>-</Button>

        <h1>  &nbsp; {contador} &nbsp;  </h1>
        {context.setQuantity(contador)}
    <Button onClick={()=>{setcontador(contador+1);
     if(contador >= 10) (puestaCero());
    
    }}>+</Button>
    </ButtonGroup>
   <h2>{texto}</h2>
   
    </>
  );
}

export default ItemCount;
