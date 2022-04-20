import './Brand.css';
import NavBar from '../NavBar';

import disneyVideo from '../../assets/brand/videos/disney.mp4';
import pixarVideo from '../../assets/brand/videos/pixar.mp4';
import marvelVideo from '../../assets/brand/videos/marvel.mp4';
import starwarsVideo from '../../assets/brand/videos/starwars.mp4';
import natgeoVideo from '../../assets/brand/videos/natgeo.mp4';

import disneyPoster from '../../assets/brand/posters/disney.jpeg';
import pixarPoster from '../../assets/brand/posters/pixar.jpeg';
import marvelPoster from '../../assets/brand/posters/marvel.jpeg';
import starwarsPoster from '../../assets/brand/posters/starwars.jpeg';
import natgeoPoster from '../../assets/brand/posters/natgeo.jpeg';

import { getAllContents } from '../../store/content';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, useParams } from 'react-router-dom';

function Brand ({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const contents = useSelector(state => state.content.contents);
    const [loaded, setLoaded] = useState(false);
    const [poster, setPoster] = useState(null);
    const brand = useParams().brandName;

    useEffect(() => {
        (async () => await dispatch(getAllContents()).then(() => setLoaded(true)))();
    }, [dispatch]);

    if (!loaded) return null;

    if (!user.profiles.length) return <Redirect to='/create-profile' />;
    if (!user.current_profile_id) return <Redirect to='/profiles' />;

    return (
        <div id='brand' style={{ backgroundImage: poster ? `url('${poster}')` : null }}>
                <NavBar background='linear-gradient(rgb(26, 29, 41), transparent 80%)'/>
                <div id='brand-background'>
                {
                    (brand === 'disney' && !poster) && <video onEnded={() => setPoster(disneyPoster)} id='background-video' poster={disneyPoster} autoPlay muted>
                        <source src={disneyVideo} type='video/mp4'/>
                    </video>
                }
                {
                    (brand === 'pixar' && !poster) && <video onEnded={() => setPoster(pixarPoster)} id='background-video' poster={pixarPoster} autoPlay muted>
                        <source src={pixarVideo} type='video/mp4'/>
                    </video>
                }
                {
                    (brand === 'marvel' && !poster) && <video onEnded={() => setPoster(marvelPoster)} id='background-video' poster={marvelPoster} autoPlay muted>
                        <source src={marvelVideo} type='video/mp4'/>
                    </video>
                }
                {
                    (brand === 'starwars' && !poster) && <video onEnded={() => setPoster(starwarsPoster)} id='background-video' poster={starwarsPoster} autoPlay muted>
                        <source src={starwarsVideo} type='video/mp4'/>
                    </video>
                }
                {
                    (brand === 'natgeo' && !poster) && <video onEnded={() => setPoster(natgeoPoster)} id='background-video' poster={natgeoPoster} autoPlay muted>
                        <source src={natgeoVideo} type='video/mp4'/>
                    </video>
                }
                <div id='brand-container'>
                    <div id='brand-grid'>
                        {
                            brand === 'disney' && contents.sections.Originals.map(content => (
                                <div onClick={() => history.push(`/content/${content.id}`)} className='brand-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                </div>
                            ))
                        }
                        {
                            brand === 'pixar' && contents.sections.Pixar.map(content => (
                                <div onClick={() => history.push(`/content/${content.id}`)} className='brand-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                </div>
                            ))
                        }
                        {
                            brand === 'marvel' && contents.sections.Marvel.map(content => (
                                <div onClick={() => history.push(`/content/${content.id}`)} className='brand-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                </div>
                            ))
                        }
                        {
                            brand === 'starwars' && contents.sections['Star Wars'].map(content => (
                                <div onClick={() => history.push(`/content/${content.id}`)} className='brand-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                </div>
                            ))
                        }
                        {
                            brand === 'natgeo' && contents.sections.NatGeo.map(content => (
                                <div onClick={() => history.push(`/content/${content.id}`)} className='brand-content' key={content.id} style={{ backgroundImage: `url('${content.thumbnail}')` }}>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Brand;
