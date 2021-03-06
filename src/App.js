import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from "./components/Hero";
import Products from './components/Products';
import Services from './components/Services';
import Authors from './components/Authors';
import {productData} from './components/Authors/data';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/> 
  <Products/>
  <Services/>
  <Authors data={productData}/>
    </Router>
  );
}

export default App;
