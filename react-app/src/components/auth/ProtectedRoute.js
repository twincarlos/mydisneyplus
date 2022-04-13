import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import ProfilePage from '../ProfilePage';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  return (
    <Route {...props}>
      {user ? (user.current_profile_id ? props.children : <ProfilePage />)  : <Redirect to='/login' />}
    </Route>
  )
};


export default ProtectedRoute;
