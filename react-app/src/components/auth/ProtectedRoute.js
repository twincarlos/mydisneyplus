import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  return (
    <Route {...props}>
      { user ? (user.profiles.length ? (user.current_profile_id ? props.children : <Redirect to='/profiles' />) : <Redirect to='/create-profile' />) : <Redirect to='/login' /> }
    </Route>
  )
};


export default ProtectedRoute;
