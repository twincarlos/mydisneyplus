import './ContentGallery.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContents } from '../../../store/content';
import NavBar from '../../NavBar';
import ImageSlider from './ImageSlider';

function ContentGallery() {
    const dispatch = useDispatch();
    const contents = useSelector(state => state.content.contents);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => await dispatch(getAllContents()).then(() => setLoaded(true)))();
    }, [dispatch]);

    if (!loaded) return null;

    return (
        <div id='content-gallery'>
            <NavBar />
            <ImageSlider contents={contents} />
        </div>
    );
}

export default ContentGallery
