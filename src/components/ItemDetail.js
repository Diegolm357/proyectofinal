import React, { useEffect, useState } from "react";
import { Card, Button} from 'react-bootstrap';


function ItemDetail() {
    let [productos, setProductos] = useState([]);
   

    useEffect(() => {

        fetch("https://api.mercadolibre.com/sites/MLA/search?q=vinos")
            .then(response => response.json())
            .then(datos => {console.log(datos.results[0])
                let aux={
                    title: datos.results[0].title,
                    img: datos.results[0].thumbnail,
                }
                setProductos(aux)
            }
            );   
            
    }, [])
   
    return (

<div>
             
             <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src= {productos.img} />
     <Card.Body>
                            <Card.Title>{productos.title}
    
       </Card.Title>
       <Card.Text>
         
         Some quick example text to build on the card title and make up the bulk of
         the card's content.
                    </Card.Text>
                    </Card.Body>
                   


       <Button variant="primary">COMPRAR</Button>
     
            </Card>
            
              </div>















       
    );
    
}  export default ItemDetail;