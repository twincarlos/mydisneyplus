import './Originals.css';
import NavBar from '../NavBar';

import { getAllContents } from '../../store/content';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

function Originals ({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const contents = useSelector(state => state.content.contents);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => await dispatch(getAllContents()).then(() => setLoaded(true)))();
    }, [dispatch]);

    if (!loaded) return null;

    if (!user.profiles.length) return <Redirect to='/create-profile' />;
    if (!user.current_profile_id) return <Redirect to='/profiles' />;

    return (
        <div id='originals'>
            <NavBar backgroundColor={'#090B13'}/>
            <div id='originals-container'>
                <h1>Originals</h1>
                <div id='originals-grid'>
                    {
                        contents.Originals.map(content => (
                            <div onClick={() => history.push(`/content/${content.id}`)} className='originals-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Originals;
