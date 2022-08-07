import React from 'react';
import '../../pages/maincss/checkout.css';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { StateValue } from '../../StateProvider';

function CheckProduct({id, title, image, rating, price}) {
  const [{basket}, dispatch] = StateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    })
  }

  return (
    <div className='checkout__product'>
      <img className='checkout-image__style' src={image} alt='checkimage'/>
      <div className='checkout-product__info'>
        <p className='checkout__title'>{title}</p>
        <p className='checkout-price__info'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='checkout-product__rating'>
          {Array(rating).fill().map((_) => (<p><StarOutlineIcon/></p>))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckProduct;



















