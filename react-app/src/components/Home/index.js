import ContentGallery from './ContentGallery';
import Splash from './Splash';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Home () {
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.session.profile);

    return user ? (profile ? <ContentGallery user={user} /> : (user.profiles.length ? <Redirect to='/profiles'/> : <Redirect to='/create-profile'/>)) : <Splash />
}

export default Home
