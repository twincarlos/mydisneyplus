import ContentGallery from './ContentGallery';
import Splash from './Splash';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Home () {
    const user = useSelector(state => state.session.user);
    const profile = useSelector(state => state.session.profile);

    return user ? (profile ? <ContentGallery user={user} /> : <Redirect to='/profiles'/>) : <Splash />
}

export default Home
