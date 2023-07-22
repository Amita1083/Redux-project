
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
// Switch is replaced by Routes
// In react-router-dom v6, "Switch" is replaced by routes "Routes". 

function App() {
  return (
    <div >
     <Router>
     <Header/>
     <Routes>
      <Route path="/"  element={<ProductListing/>}></Route>
      <Route path="/product/:productId"  element={<ProductDetails/>}></Route>
      <Route> 404 Not Found</Route>
      </Routes>
     </Router>
      
    </div>
  );
}

export default App;
