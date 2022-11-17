import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductUList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  height: 984px;
`;

const requests = async () => {
  try {
    const response = await fetch('http://test.api.weniv.co.kr/mall');
    if (!response.ok) {
      throw new Error('error !!');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const ProductList = () => {
  const [productListData, setProductListData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await requests();
      setProductListData(result);
    }
    fetchData();
  }, []);

  return (
    <ProductUList>
      {productListData.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </ProductUList>
  );
};

export default ProductList;
