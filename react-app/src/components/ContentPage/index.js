import './ContentPage.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

import NavBar from '../NavBar';
import { getOneContent } from '../../store/content';
import { favoriteOneContent, unfavoriteOneContent } from '../../store/session';

function ContentPage () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);
    const contentId = useParams().contentId;
    const content = useSelector(state => state.content.content);
    const profile = useSelector(state => state.session.profile);
    const user = useSelector(state => state.session.user);

    const [playing, setPlaying] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [volume, setVolume] = useState(1);

    useEffect(() => {
        (async () => await dispatch(getOneContent(contentId)).then(() => setLoaded(true)))();
    }, [dispatch, contentId]);

    if (!loaded) return null;

    if (!user.profiles.length) return <Redirect to='/create-profile' />;

    return (
        <div id='content-background' style={{ backgroundImage: `url('${content.background_picture}')` }}>
            { !width && <NavBar backgroundColor={'transparent'} /> }
            <ReactPlayer
                url={content.media}
                width={width + "%"}
                height={height + "%"}
                playing={playing}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
                volume={volume}
            />
            {
                width ? (
                <div id='controls'>
                    { playing && <button onClick={() => setPlaying(false)}>Pause</button> }
                    { !playing && <button onClick={() => setPlaying(true)}>Play</button> }
                    <input onChange={e => setVolume(e.target.value)} type='range' min={0} max={1} step={0.01} value={volume}></input>
                    <button onClick={() => {
                        setPlaying(false);
                        setWidth(0);
                        setHeight(0);
                    }}>Fullscreen</button>
                </div>
            ) : null}
            <div id='content-page'>
                <div id='content-details'>
                    <img style={{ width: '15vw', marginBottom: 20 }} src={content.logo} alt=''></img>
                    <h1 style={{ marginBottom: 10, fontSize: 80 }}>{content.title}</h1>
                    <span style={{ marginBottom: 30 }}>
                        <button id='play' onClick={() => {
                            setWidth(100);
                            setHeight(100);
                            setPlaying(true);
                        }}><i className="fas fa-play"></i> Play</button>
                        {
                            profile.favorites.find(favorite => favorite.content.id === content.id) ?
                            <button className='fav' onClick={() => {
                                dispatch(unfavoriteOneContent(profile.id, content.id));
                            }}><i className="fas fa-check"></i></button> :
                            <button className='fav' onClick={() => {
                                dispatch(favoriteOneContent(profile.id, content.id));
                            }}><i className="fas fa-plus"></i></button>
                        }
                        {
                            content.creator.id === user.id ? <button onClick={() => history.push(`/edit-content/${content.id}`)} className='fav'><i className="fas fa-pen"></i></button> : null
                        }
                    </span>
                    <p>{content.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ContentPage;
