import './Section.css';
import NavBar from '../NavBar';

import { getAllContents } from '../../store/content';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

function Section ({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const section = useParams().section;
    const contents = useSelector(state => state.content.contents);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => await dispatch(getAllContents()).then(() => setLoaded(true)))();
    }, [dispatch]);

    if (!loaded) return null;

    if (!user.profiles.length) return <Redirect to='/create-profile' />;
    if (!user.current_profile_id) return <Redirect to='/profiles' />;

    return (
        <div id='section'>
            <NavBar background='#090B13'/>
            {
                section === 'originals' && (
                    <div id='section-container'>
                        <h1>Originals</h1>
                        <div id='section-grid'>
                            {
                                contents.sections.Originals.map(content => (
                                    <div onClick={() => history.push(`/content/${content.id}`)} className='section-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            {
                section === 'movies' && (
                    <div id='section-container'>
                        <h1>Movies</h1>
                        <div id='section-grid'>
                            {
                                contents.sections.Movies.map(content => (
                                    <div onClick={() => history.push(`/content/${content.id}`)} className='section-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
            {
                section === 'series' && (
                    <div id='section-container'>
                        <h1>Series</h1>
                        <div id='section-grid'>
                            {
                                contents.sections.Series.map(content => (
                                    <div onClick={() => history.push(`/content/${content.id}`)} className='section-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Section;
