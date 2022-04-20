import './Watchlist.css';
import NavBar from '../NavBar';

import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

function Watchlist ({ user }) {
    const profile = useSelector(state => state.session.profile);
    const history = useHistory();

    if (!user.profiles.length) return <Redirect to='/create-profile' />;
    if (!profile) return <Redirect to='/profiles' />;

    return (
        <div id='watchlist'>
            <NavBar background='#090B13'/>
            <div id='watchlist-container'>
                <h1>Watchlist</h1>
                <h2 style={{ marginBottom: 20 }}>My Movies & Series</h2>
                <div id='watchlist-grid'>
                    {
                        profile.favorites.map(favorite => (
                            <div onClick={() => history.push(`/content/${favorite.content.id}`)} className='watchlist-content' key={favorite.content.id} style={{ backgroundImage: `url('${favorite.content.thumbnail}')` }}>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Watchlist;
