import React from 'react'
import './Home.css'
import './Product.css'
function Product({productObj,addToCart}) {
    //console.log(props)
    function handleEvent(){
        addToCart(productObj)
    }
  return (
    <div className='card text-center p-4 bg-secondary'>
        <img className='d-block mx-auto img' src={productObj.image} height='200px' width='160px' alt="IMG MAYBE DELETED" />
        <div className='card-body'>
            <h5 className='text-white'>{productObj.title}</h5>
            <p className="lead">★ {productObj.rating.rate}({productObj.rating.count})</p>
            <h6 className='text-white'>{productObj.price}</h6>
            <button className="btn btn-info" onClick={handleEvent}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Product