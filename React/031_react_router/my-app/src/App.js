import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Buy from './pages/Buy';
import Cart from './pages/Cart';
import Main from './pages/Main';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
