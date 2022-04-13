import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import disneyPlusLogo from '../../assets/disney-plus-logo.png';
import ProfileButton from './ProfileButton';

import './NavBar.css';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const profile = useSelector(state => state.session.profile);

  return (
    <nav>
        <NavLink to='/'>
          <img style={{ width: 100, marginLeft: 40 }} src={disneyPlusLogo} alt=''></img>
        </NavLink>
        <NavLink to='/'>
          <i className="fas fa-home"></i>
          <p>HOME</p>
        </NavLink>
        <NavLink to='/'>
          <i className="fas fa-search"></i>
          <p>SEARCH</p>
        </NavLink>
        <NavLink to='/'>
          <i className="fas fa-plus"></i>
          <p>WATCHLIST</p>
        </NavLink>
        <NavLink to='/'>
          <i className="fas fa-star"></i>
          <p>ORIGINALS</p>
        </NavLink>
        <NavLink to='/'>
          <i className="fas fa-film"></i>
          <p>MOVIES</p>
        </NavLink>
        <NavLink to='/'>
        <i className="fas fa-tv"></i>
        <p>SERIES</p>
        </NavLink>
        <ProfileButton user={user} profile={profile} />
    </nav>
  );
}

export default NavBar;
