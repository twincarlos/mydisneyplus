import ContentGallery from './ContentGallery';
import Splash from './Splash';

import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Home () {
    const user = useSelector(state => state.session.user);

    return user ? (user.current_profile_id ? <ContentGallery /> : <Redirect to='/profiles'/>) : <Splash />
}

export default Home
