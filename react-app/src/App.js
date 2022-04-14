import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/profiles' exact={true} >
          <SelectProfile />
        </Route>
        <Route path='/create-profile' exact={true} >
          <CreateProfile />
        </Route>
        <ProtectedRoute path='/edit-profile' exact={true} >
          <EditProfile />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
