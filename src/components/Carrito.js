import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {  CardGroup, Col, Row, Container, Card, Button} from 'react-bootstrap';


function Carrito() {
        
  const  context = useContext(CartContext)
  
    return (
      <>
             
            <Container className="mb-3" align="center" >
            <Row  >
    <Col sm={6} >
            <CardGroup>
            {(context.quantity).map((index) => {
                return (
                    <div>
        
                       
      <Card border="secondary">
                      <Card.Img variant="top" style={{ width: '150px' }} src={(context.imagen)[index]} />
     <Card.Body>
        <Card.Title>{(context.cart)[index]}

       </Card.Title>
      
                                <Button onClick={() => {
                                    
                                       
                                    
                                }}  >COMPRAR</Button>
                              <br/>
                                <Link className="btn btn-warning" to="/Carrito"
                                    
                                    onClick={() => {

                                       
                                        
                                    }} 
                                    
                                    variant="warning">Carrito</Link>
                               
                               
                               
                                <Card.Text>
           <br/>                         
       
       </Card.Text>
       </Card.Body>
       </Card>
                    
          
                  
              </div>
                )
            })}
                    
                        </CardGroup>
                        </Col>
</Row>
                    </Container>
                   </>
    );

}  export default Carrito; 