import React from 'react';
import { StateValue } from '../StateProvider';
import '../pages/maincss/checkout.css';
import CheckProduct from '../components/checkout/CheckProduct';

function Checkouts() {
  const [{basket}] = StateValue();
  return (
    <div className='checkout'>
      <div className='checkout-left__side'>
        <img className='checkout__banner' src='https://m.media-amazon.com/images/G/01/prime/ellis/cobrandedOfferPages/client/grubhub/primedeal/GH_Landing_Page_Banner_Desktop_1500x390._CB635915732_.png' alt='amazon-prime' />
        {basket?.length === 0 ? (
          <div>
            <h3>Your Shopping Basket is Empty</h3>
            <p>Amazon Prime is a paid subscription service from Amazon which is available in various countries.</p>
          </div>
          ) : (
            <div>
              <h3>Your Shopping Basket</h3>
              {basket.map(item => (
                <CheckProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
              ))}
            </div>
          )}
      </div>
    </div>
    );
}

export default Checkouts;