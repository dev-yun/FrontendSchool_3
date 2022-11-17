import { useState } from 'react';
import styled from 'styled-components';
import heart from '../../asset/icon-heart-on.svg';
import emptyHeart from '../../asset/icon-heart.svg';

const ProductLI = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Img = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
  border: 1px solid #bdbdbd;

  margin-bottom: 20px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  width: 310px;
  flex-basis: 310px;
  align-items: center;

  color: #333333;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Heart = styled.span`
  width: 18px;
  height: 16px;
  background: url(${(props) => (props.checked ? heart : emptyHeart)}) no-repeat
    center;
  background-size: cover;
`;

const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  display: flex;
  align-items: center;

  color: #333333;

  &::after {
    content: '원';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    display: flex;
    align-items: center;
  }
`;

const ProductItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };
  return (
    <ProductLI>
      <Img
        src={'http://test.api.weniv.co.kr/' + item.thumbnailImg}
        alt={item.productName}
      ></Img>
      <Wrap>
        <ProductName>{item.productName}</ProductName>
        <Heart checked={isChecked} onClick={handleChecked}></Heart>
      </Wrap>
      <ProductPrice>{item.price}</ProductPrice>
    </ProductLI>
  );
};

export default ProductItem;
