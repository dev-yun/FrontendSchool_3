import styled from 'styled-components';
import ProductList from './components/Products/ProductList';
import ShoppingCart from './components/UI/ShoppingCart';

const MainCont = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 160px 330px;

  position: relative;
`;

function App() {
  return (
    <MainCont>
      <ProductList />
      <ShoppingCart />
    </MainCont>
  );
}
export default App;
