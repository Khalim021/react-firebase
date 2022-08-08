import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { StateValue } from '../../StateProvider';
import { auth } from '../../firebase';

function Header() {
  const [{basket, user}] = StateValue();

  const login = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <nav className='header'>
      <Link to="/">
        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo'/>
      </Link>
      <div className='header__item'>
        <input type='text' className='input__search'/>
        <SearchIcon className='search__icon'/>
      </div>
      <div className='header__nav'>
        <Link to={!user && "/login"} className="header__link">
          <div onClick={login} className='header__items'>
            <span className='header__lineOne'>Hello {user?.email}</span>
            <span className='header__lineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to='/' className="header__link">
          <div className='header__items'>
            <span className='header__lineOne'>Returns</span>
            <span className='header__lineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className="header__link">
          <div className='header__items'>
            <span className='header__lineOne'>Your</span>
            <span className='header__lineTwo'>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__link'>
          <div className='items__basket'>
            <ShoppingBasketIcon />
            <span className='header__lineTwo header-items__count'>{basket?.length}</span>
          </div>
        </Link>
      </div>

    </nav>
    );
}

export default Header;