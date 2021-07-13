import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

import {  Card, Button} from 'react-bootstrap';


function Carrito() {
        
  const  context = useContext(CartContext)
  
    return (
     <>         
                       
      <Card border="secondary">
      <Card.Img variant="top" style={{ width: '150px' }} src={"../src/botella"} />
     <Card.Body>
        <Card.Title>{context.cart}
{ console.log(context.cart) }
            </Card.Title>
          <h3>{context.quantity}</h3>  
       <Card.Text>
       
         Some quick example text to build on the card title and make up the bulk of
         the card's content.
                   </Card.Text>

                <Button  variant="warning">COMPRAR</Button>
              
       </Card.Body>
        </Card>
       
                  </>
    );

}  export default Carrito; 