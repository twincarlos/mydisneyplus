import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import disneyPlusLogo from '../../assets/disney-plus-logo.png';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const data = await dispatch(signUp(username, email, password, repeatPassword));
    if (data) setErrors(data);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='signup'>
      <img style={{ width: 200, marginBottom: 30 }} src={disneyPlusLogo} alt=''></img>
      <h1>Sign up with your email</h1>
      <form onSubmit={onSignUp}>
        <div id='errors'>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          placeholder='Username'
        ></input>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder='Email'
        ></input>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder='Password'
        ></input>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder='Confirm Password'
          required={true}
        ></input>
        <button type='submit'>Sign Up</button>
      </form>
      <span>
        <p style={{ marginRight: 10, color: '#cacaca' }}>Already have an account?</p>
        <NavLink to='/login'>Log in</NavLink>
      </span>
    </div>
  );
};

export default SignUpForm;
