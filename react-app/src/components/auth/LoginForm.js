import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { login } from '../../store/session';

import './auth.css';
import disneyPlusLogo from '../../assets/disney-plus-logo.png';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      return <Redirect to='/'/>
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='login'>
      <img style={{ width: 200 }} src={disneyPlusLogo} alt=''></img>
      <h1>Log in with your email</h1>
      <form onSubmit={onLogin}>
        <div id='errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button type='submit'>Login</button>
          <button style={{ marginTop: 10 }} onClick={() => {
            setEmail('disney@aa.io');
            setPassword('password');
          }}>Login as Demo</button>
      </form>
      <span>
        <p style={{ marginRight: 10, color: '#cacaca' }}>New to MyDisney+?</p>
        <NavLink to='/signup'>Sign up</NavLink>
      </span>
    </div>
  );
};

export default LoginForm;
