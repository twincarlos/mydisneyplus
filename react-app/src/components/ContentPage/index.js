import './ContentPage.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import NavBar from '../NavBar';
import { getOneContent } from '../../store/content';

function ContentPage () {
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);
    const contentId = useParams().contentId;
    const content = useSelector(state => state.content.content);

    useEffect(() => {
        (async () => await dispatch(getOneContent(contentId)).then(() => setLoaded(true)))();
    }, [dispatch, contentId]);

    if (!loaded) return null;

    return (
        <div id='content-background' style={{ backgroundImage: `url('${content.background_picture}')` }}>
            <NavBar backgroundColor={'transparent'} />
            <div id='content-page'>
                <div id='content-details'>
                    <img style={{ width: '15vw', marginBottom: 20 }} src={content.logo} alt=''></img>
                    <h1 style={{ marginBottom: 10, fontSize: 80 }}>{content.title}</h1>
                    <span style={{ marginBottom: 30 }}>
                        <button id='play'><i className="fas fa-play"></i> Play</button>
                        <button id='fav'><i className="fas fa-plus"></i></button>
                    </span>
                    <p>{content.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ContentPage;
