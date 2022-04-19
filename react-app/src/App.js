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
import ContentPage from './components/ContentPage';
import CreateContent from './components/ContentPage/CreateContent';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  useEffect(() => {
    (async() => await dispatch(authenticate()).then(data => data?.current_profile_id ? dispatch(setOneProfile(data.current_profile_id)) : null).then(() => setLoaded(true)))();
  }, [dispatch]);

  if (!loaded) return null;

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
          { user ? <SelectProfile /> : <Redirect to='/login' /> }
          <SelectProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/create-profile' exact={true} >
          <CreateProfile />
        </ProtectedRoute>
        <ProtectedRoute path='/edit-profile' exact={true} >
          { user ? <EditProfile /> : <Redirect to='/login' /> }
        </ProtectedRoute>
        <ProtectedRoute path='/content/:contentId' exact={true}>
          { user ? <ContentPage /> : <Redirect to='/login' /> }
        </ProtectedRoute>
        <ProtectedRoute path='/create-content' exact={true}>
          { user ? <CreateContent /> : <Redirect to='/login' /> }
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
