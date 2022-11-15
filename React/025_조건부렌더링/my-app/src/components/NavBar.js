import React, { useState } from 'react';
import ContentsContainer from './ContentsContainer';

function NavBar() {
  const [listName, setListName] = useState('about');
  const handleChangeId = (e) => {
    setListName(e.target.id);
  };
  return (
    <>
      <ul>
        <li
          id="about"
          style={listName === 'about' ? { color: 'red' } : { color: 'black' }}
          onClick={handleChangeId}
        >
          About
        </li>
        <li
          id="product"
          style={listName === 'product' ? { color: 'red' } : { color: 'black' }}
          onClick={handleChangeId}
        >
          Product
        </li>
        <li
          id="cart"
          style={listName === 'cart' ? { color: 'red' } : { color: 'black' }}
          onClick={handleChangeId}
        >
          Cart
        </li>
        <li
          id="contact"
          style={listName === 'contact' ? { color: 'red' } : { color: 'black' }}
          onClick={handleChangeId}
        >
          Contact
        </li>
      </ul>
      <ContentsContainer listName={listName} />
    </>
  );
}

export default NavBar;
