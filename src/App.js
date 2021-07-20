import React from 'react';
import Navbars from './components/Navbars';
import { CartProvider } from "./context/CartContext";
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemListBlanco from './components/ItemListBlanco';
import ItemList from './components/ItemList';
import ItemListEspumante from './components/ItemListEspumante';
import Carrito from './components/Carrito';
function App() {
  return (
    <>
      <Router>
        <header>
        <CartProvider>
     <Navbars/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/ItemListBlanco' component={ItemListBlanco} />
            <Route path='/ItemList' component={ItemList} />
            <Route path='/ItemListEspumante' component={ItemListEspumante} />
            <Route path='/Carrito' component={Carrito} />
</Switch>
</CartProvider>

          </header> 
        

     
       </Router>
     
    </>
  );
}

export default App;





