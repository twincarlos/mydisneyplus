import './Home.css';
import ContentGallery from './ContentGallery';
import Splash from './Splash';

import { useSelector } from 'react-redux';

function Home () {
    const user = useSelector(state => state.session.user);
    return user ? <ContentGallery user={user} /> : <Splash />
}

export default Home
