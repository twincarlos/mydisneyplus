import './CreateContent.css';
import disneyPlusLogo from '../../../assets/disney-plus-logo.png';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

import { postOneContent } from '../../../store/content';

function CreateContent ({ user }) {
    const [step, setStep] = useState(1);
    const [contentType, setContentType] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mediaUrl, setMediaUrl] = useState('');
    const [categories, setCategories] = useState([]);
    const [logo, setLogo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [backgroundPicture, setBackgroundPicture] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [backgroundPicturePreview, setBackgroundPicturePreview] = useState(null);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const ALL_CATEGORIES = [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Science Fiction' },
        { id: 3, name: 'Music' },
        { id: 4, name: 'Coming of Age' },
        { id: 5, name: 'Comedies' },
        { id: 6, name: 'Documentaries' },
        { id: 7, name: 'Family' },
        { id: 8, name: 'Classics' },
        { id: 9, name: 'Romantic' },
        { id: 10, name: 'Mysteries' },
        { id: 11, name: 'Kids' }
    ]

    const checkCategory = id => {
        const idx = categories.indexOf(id);
        if (idx > -1) setCategories(categories.filter(category => category !== id));
        else setCategories([...categories, id]);
    }

    const handleSubmit = async () => {
        await dispatch(postOneContent({
            content_type: contentType,
            title,
            description,
            media: mediaUrl,
            logo: logo ? logo : "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png",
            thumbnail: thumbnail ? thumbnail : "https://wallpaperaccess.com/full/250147.jpg",
            background_picture: backgroundPicture ? backgroundPicture : "https://static-assets.bamgrid.com/product/disneyplus/images/background.dc67869b698f6c927aae59c68d9dda46.png",
            categories
        })).then(result => result.errors ? setErrors(result.errors) : history.push(`/content/${result.id}`));
    }

    if (!user.profiles.length) return <Redirect to='/create-profile' />;

    return (
        <div id='create-content'>
            <nav>
                <img onClick={() => history.push('/')} style={{ width: 100, marginLeft: 40, cursor: 'pointer' }} src={disneyPlusLogo} alt=''></img>
                <button id='cancel' onClick={() => history.push(`/`)}>Cancel</button>
                <h1>Step {step} / 4</h1>
            </nav>
            {
                step > 1 ? (
                    <div onClick={() => setStep(step - 1)} id='next-left'>
                        <i className="fas fa-chevron-left"></i>
                    </div>
                ) : null
            }
            {
                step === 1 ? (
                    <div className='create-content' id='create-content-1'>
                        <h1 style={{ marginBottom: 20 }}>What type of content is this?</h1>
                        <span>
                            <button onClick={() => setContentType('Movie')} className={contentType === 'Movie' ? 'content-type' : null}>Movie</button>
                            <button onClick={() => setContentType('Series')} className={contentType === 'Series' ? 'content-type' : null}>Series</button>
                        </span>
                    </div>
                ) : null
            }
            {
                step === 2 ? (
                    <div className='create-content' id='create-content-2'>
                        <h1>Title:</h1>
                        <input value={title} onChange={e => setTitle(e.target.value)} type='text'></input>
                        <h1>Description:</h1>
                        <textarea defaultValue={description} onChange={e => setDescription(e.target.value)} ></textarea>
                        <h1>Genres:</h1>
                        <div id='categories'>
                            {
                                ALL_CATEGORIES.map(category => (
                                    <span onClick={() => checkCategory(category.id)} className={categories.includes(category.id) ? 'selected' : null} key={category.id}>{category.name}</span>
                                ))
                            }
                        </div>
                    </div>
                ) : null
            }
            {
                step === 3 ? (
                    <div className='create-content' id='create-content-3'>
                        <h1>Media URL:</h1>
                        <input value={mediaUrl} onChange={e => setMediaUrl(e.target.value)} type='text'></input>
                    </div>
                ) : null
            }
            {
                step === 4 ? (
                    <div className='create-content' id='create-content-4'>
                        <div id='inputs'>
                            <div className='errors'>
                                {
                                    errors.map((error, idx) => <p key={idx}>{error}</p>)
                                }
                            </div>
                            <h1>Optional</h1>
                            <p></p>
                            <input onChange={e => {
                                setLogo(e.target.files[0]);
                                const reader = new FileReader();
                                reader.onloadend = () => setLogoPreview(reader.result);
                                reader.readAsDataURL(e.target.files[0]);
                            }} accept='image/*' type="file" id="logo" className="input-file" style={{ visibility: 'hidden' }}/>
                            <label htmlFor="logo">Change logo</label>
                            <input onChange={e => {
                                setThumbnail(e.target.files[0]);
                                const reader = new FileReader();
                                reader.onloadend = () => setThumbnailPreview(reader.result);
                                reader.readAsDataURL(e.target.files[0]);
                            }} accept='image/*' type="file" id="thumbnail" className="input-file" style={{ visibility: 'hidden' }}/>
                            <label htmlFor="thumbnail">Change thumbnail</label>
                            <input onChange={e => {
                                setBackgroundPicture(e.target.files[0]);
                                const reader = new FileReader();
                                reader.onloadend = () => setBackgroundPicturePreview(reader.result);
                                reader.readAsDataURL(e.target.files[0]);
                            }} accept='image/*' type="file" id="background-image" className="input-file" style={{ visibility: 'hidden' }}/>
                            <label htmlFor="background-image">Change background image</label>
                            <button className='submit' onClick={handleSubmit}>Submit</button>
                        </div>
                        <div id='content-assets'>
                            <div className='content-asset'>
                                <p>Logo</p>
                                <img src={logoPreview ? logoPreview : "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/scale?width=640&aspectRatio=1.78&format=png"} alt=''></img>
                            </div>
                            <div className='content-asset'>
                                <p>Thumbnail</p>
                                <img src={thumbnailPreview ? thumbnailPreview : "https://wallpaperaccess.com/full/250147.jpg"} alt=''></img>
                            </div>
                            <div className='content-asset'>
                                <p>Background Picture</p>
                                <img src={backgroundPicturePreview ? backgroundPicturePreview : "https://static-assets.bamgrid.com/product/disneyplus/images/background.dc67869b698f6c927aae59c68d9dda46.png"} alt=''></img>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            {
                step < 4 ? (
                    <div onClick={() => setStep(step + 1)} id='next-right'>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                ) : null
            }
        </div>
    );
}

export default CreateContent;
