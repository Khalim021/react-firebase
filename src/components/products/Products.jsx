import React from 'react';
import '../products/products.css'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { StateValue } from '../../StateProvider';
function Products({id, title, price, rating, image}) {
  const [{}, dispatch] = StateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className='main__products'>
      <div className='product-main__info'>
        <h3>{title}</h3>
        <p className='product__price'>
          <small className='dollar'>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_) => (<p><StarOutlineIcon/></p>))}
        </div>
      </div>
      <img src={image} alt="product"/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
    );
}

export default Products;