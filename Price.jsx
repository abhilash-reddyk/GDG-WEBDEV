import React, { useState, useEffect } from 'react';
import './Price.css';

function Price({ cartItems }) {
  const [total, setTotal] = useState(0);
  const couponDiscount = 50;
  const platformFee = 10;
  const shippingCharges = 20;
  useEffect(() => {
    let newTotal = 0;
    cartItems.forEach((item) => {
      newTotal += item.price * item.quantity;
    });
    setTotal(newTotal);
  }, [cartItems]);
  const totalAmount = total > 0 ? total - couponDiscount + platformFee + shippingCharges : 0;
  function placeOrder()
  {
    {
      console.log("order placed Successfully")
    }
  }
  return (
    <div className="container">
      <h4 className="heading">Price Details</h4>
      <div className="item">
        <p>Complete MRP</p>
        <p>₹{total.toFixed(2)}</p>
      </div>
      <div className="item">
        <p>Coupon Discount</p>
        <p>₹{couponDiscount}</p>
      </div>
      <div className="item">
        <p>Platform Fee</p>
        <p>₹{platformFee}</p>
      </div>
      <div className="item">
        <p>Shipping Charges</p>
        <p>₹{shippingCharges}</p>
      </div>
      <div className="itemtotal">
        <p>Amount</p>
        <p>₹{totalAmount.toFixed(2)}</p>
      </div>
      <button className="btn btn-info " onClick={placeOrder}>Click Order</button>
    </div>
  );
}

export default Price;