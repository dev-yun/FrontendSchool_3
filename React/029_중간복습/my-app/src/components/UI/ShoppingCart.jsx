import styled from 'styled-components';
import cart from '../../asset/icon-shopping-cart-white.svg';

const Cart = styled.img`
  position: fixed;
  width: 60px;
  height: 60px;
  right: calc(50% - 800px);
  top: 200px;

  padding: 10px;
  background: #6327fe;
  border-radius: 30%;
`;

const ShoppingCart = () => {
  return (
    <>
      <Cart src={cart} />
    </>
  );
};

export default ShoppingCart;
