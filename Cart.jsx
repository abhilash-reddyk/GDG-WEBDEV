import React from 'react';
import './Cart.css';

function Cart({ cartItems, onAdd, onRemove }) {
  return (
    <div>
      <h1 className='text-center'>Items in Cart</h1>
         <div className="CART">
        {cartItems.map((item) => (
          <div key={item.id} className="card text-center p-4 bg-danger">
            <img src={item.image} alt={item.title} className="d-block mx-auto" width='160px' height='200px' />
            <div className='card-body'>
              <p>{item.title}</p>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className='btn btn-info p-1 m-2' onClick={() => onAdd(item)}>+</button>
              <button className='btn btn-info p-1 m-2' onClick={() => onRemove(item)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;