import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate, setOneProfile } from './store/session';
import Home from './components/Home';
import SelectProfile from './components/ProfilePage/SelectProfile';
import EditProfile from './components/ProfilePage/EditProfile';
import CreateProfile from './components/ProfilePage/CreateProfile';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate()).then(user => user?.current_profile_id ? dispatch(setOneProfile(user.current_profile_id)) : null);
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/signup' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/profiles' exact={true} >
          { user ? (!user.profiles.length ? <Redirect to='/create-profile' /> : <SelectProfile />) : <Redirect to='/login' /> }
          <SelectProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/create-profile' exact={true} >
          <CreateProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/edit-profile' exact={true} >
          { user ? (!user.profiles.length ? <Redirect to='/create-profile' /> : <EditProfile />) : <Redirect to='/login' /> }
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
