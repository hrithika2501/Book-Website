import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from "./components/Hero";
import Products from './components/Products';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Hero/> 
  <Products/>
  <Services/>
    </Router>
  );
}

export default App;
