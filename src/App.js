import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="first-box">
        <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 1" productPrice="$999"/>
        <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 2" productPrice="$999"/>
        <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 3" productPrice="$999"/>
        <ItemListContainer image="https://www.guantexindustrial.com.ar/707-large_default/remera-algodon-jersey-blanco-talle-xxxl.jpg" productName="Remera 4" productPrice="$999"/>
      </div>
    </div>

  );
}


export default App;
