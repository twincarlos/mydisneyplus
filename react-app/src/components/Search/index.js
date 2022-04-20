import './Search.css';
import NavBar from '../NavBar';

import { searchAllContents } from '../../store/content';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

function Search ({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const contents = useSelector(state => state.content.contents);
    const [loaded, setLoaded] = useState(false);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        (async () => await dispatch(searchAllContents(keyword)).then(() => setLoaded(true)))();
    }, [dispatch, keyword]);

    if (!loaded) return null;

    if (!user.profiles.length) return <Redirect to='/create-profile' />;
    if (!user.current_profile_id) return <Redirect to='/profiles' />;

    return (
        <div id='search'>
            <NavBar background='#090B13'/>
            <div id='search-container'>
                <input placeholder='Search by title' type='text' value={keyword} onChange={e => setKeyword(e.target.value)}></input>
                <h1>Explore</h1>
                <div id='search-grid'>
                    {
                        contents.map(content => (
                            <div onClick={() => history.push(`/content/${content.id}`)} className='search-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;
