import React from 'react';
import '../products/products.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
function Products({id, title, price, rating, image}) {
  return (
    <div className='main__products'>
      <div className='product-main__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small className='dollar'>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_) => (<p><StarOutlineIcon/></p>))}
        </div>
      </div>
      <img src={image} alt="product"/>
      <button>Add to Basket</button>
    </div>
    );
}

export default Products;