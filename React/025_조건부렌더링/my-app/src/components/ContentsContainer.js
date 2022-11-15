import About from './About';
import Cart from './Cart';
import Contact from './Contact';
import Product from './Product';

const ContentsContainer = ({ listName }) => {
  if (listName === 'about') {
    return <About />;
  } else if (listName === 'product') {
    return <Product />;
  } else if (listName === 'cart') {
    return <Cart />;
  } else if (listName === 'contact') {
    return <Contact />;
  }
};

export default ContentsContainer;
