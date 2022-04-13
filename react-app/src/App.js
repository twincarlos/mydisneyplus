import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate, setOneProfile } from './store/session';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate()).then(user => {
        if (user) return user.current_profile_id ? dispatch(setOneProfile(user.current_profile_id)) : null
      });
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
        <ProtectedRoute path='/profiles' exact={true} >
          <ProfilePage />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <NavBar />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
