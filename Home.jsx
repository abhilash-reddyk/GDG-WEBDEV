import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Home.css';
import Cart from './Cart';
import Price from './Price';

function Home() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  function addToCart(product) {
    const existingProduct = cartItems.find(item => item.id === product.id);
    
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((obj) => obj.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log('Unable to Fetch', err));
  }, []);
  const handleAdd = (item) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };
  const handleRemove = (item) => {
    setCartItems(prevItems =>
      prevItems.map(cartItem =>
        cartItem.id === item.id && cartItem.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0)
    );
  };

  return (
    <div className="Products">
      <h1 className='m-4 p-2 text-center'>Products</h1>
        <div className='Flex'>
        {  
            products.map(productObj=><Product productObj={productObj} addToCart={addToCart} key={productObj.id}/>)
        }
        </div>
      <Cart className="CART" cartItems={cartItems} onAdd={handleAdd} onRemove={handleRemove} />
      <Price cartItems={cartItems} />
    </div>
  );
}

export default Home;
