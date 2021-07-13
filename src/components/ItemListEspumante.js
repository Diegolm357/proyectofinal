
import React, { useEffect, useState } from "react";
import { CardGroup, Container, Card, Col, Row, Button} from 'react-bootstrap';

import ItemCount  from './ItemCount';

function ItemListEspumante() {
    let [productos, setProductos] = useState([]);
     

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=espumantes");
            const data = await response.json();
          return data.results;
          } 
        const esperandoDatos = async () => {
            let data = await getData()
            let aux = data.map(element => {
                return {
                    title: element.title,
                    img: element.thumbnail,
                    price:element.price,
                }
            })

            setProductos(aux);
       }

           esperandoDatos();
    }, [])

    return (
        <>
            <Container className="mb-3" align="center" >
            <Row  >
    <Col sm={6} >
            <CardGroup>
            {productos.map(element => {
                return (
                    <div>
        
                       
      <Card border="secondary">
      <Card.Img variant="top" style={{ width: '150px' }} src={element.img} />
     <Card.Body>
        <Card.Title>{element.title}

       </Card.Title>
       <Card.Text>

         Some quick example text to build on the card title and make up the bulk of
         the card's content.
                   </Card.Text>

       <Button variant="warning">COMPRAR</Button>
                                <Card.Text>
           <br/>                         
       <ItemCount />
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

}  export default ItemListEspumante; 