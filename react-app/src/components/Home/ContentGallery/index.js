import './ContentGallery.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContents } from '../../../store/content';
import NavBar from '../../NavBar';
import Carousel from './Carousel';

import disneyVideo from '../../../assets/videos/disney.mp4';
import pixarVideo from '../../../assets/videos/pixar.mp4';
import marvelVideo from '../../../assets/videos/marvel.mp4';
import starwarsVideo from '../../../assets/videos/starwars.mp4';
import natgeoVideo from '../../../assets/videos/natgeo.mp4';

import disneyLogo from '../../../assets/logos/disney.png';
import pixarLogo from '../../../assets/logos/pixar.png';
import marvelLogo from '../../../assets/logos/marvel.png';
import starwarsLogo from '../../../assets/logos/starwars.png';
import natgeoLogo from '../../../assets/logos/natgeo.png';

function ContentGallery() {
    const dispatch = useDispatch();
    const contents = useSelector(state => state.content.contents);
    const [loaded, setLoaded] = useState(false);
    const [visible, setVisible] = useState(null);

    const creators = [
        { id: 1, logo: disneyLogo, video: disneyVideo },
        { id: 2, logo: pixarLogo, video: pixarVideo },
        { id: 3, logo: marvelLogo, video: marvelVideo },
        { id: 4, logo: starwarsLogo, video: starwarsVideo },
        { id: 5, logo: natgeoLogo, video: natgeoVideo }
    ];

    useEffect(() => {
        (async () => await dispatch(getAllContents()).then(() => setLoaded(true)))();
    }, [dispatch]);

    if (!loaded) return null;

    return (
        <div id='content-gallery'>
            <NavBar />
            <Carousel contents={contents} />
            <div id='creators-container'>
                {
                    creators.map(creator => (
                        <div key={creator.id} className='creator-container' onMouseEnter={() => setVisible(creator.id)} onMouseLeave={() => setVisible(null)}>
                            <img src={creator.logo} alt=''></img>
                            <video autoPlay loop muted style={{ visibility: visible === creator.id ? 'visible' : 'hidden' }}>
                                <source src={creator.video} type='video/mp4'></source>
                            </video>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ContentGallery
