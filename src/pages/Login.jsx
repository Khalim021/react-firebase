import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './maincss/login.css';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/")

      })
      .catch((e) => alert(e.message));
  }

  const register = (e) => {
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/")
      })
      .catch((e) => alert(e.message));
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt='loginimage'/>
      </Link>
      <div className='login__container'>
        <h2>Sign in</h2>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
          <button onClick={login} type='submit' className='login__button'>Sign in</button>
        </form>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Doloribus consequuntur necessitatibus recusandae assumenda, sequi fugiat.
        </p>
        <button onClick={register} className='reg__button'>Create your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;