import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Product() {
  // 주소 출력 방법 1 => useLocation
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split('/'));

  // 주소 출력 방법 2 => useParams
  const { id } = useParams();
  console.log(id);

  return <div>Product {id}</div>;
}

export default Product;
