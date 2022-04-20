import './EditContent.css';
import disneyPlusLogo from '../../../assets/disney-plus-logo.png';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect, useParams } from 'react-router-dom';

import { getOneContent, updateOneContent } from '../../../store/content';

function EditContent({ user }) {
    const [loaded, setLoaded] = useState(false);
    const contentId = useParams().contentId;
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const content = useSelector(state => state.content.content);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [logoPreview, setLogoPreview] = useState(null);
    const [thumbnailPreview, setThumbnailPreview] = useState(null);
    const [backgroundPicturePreview, setBackgroundPicturePreview] = useState(null);
    const [logo, setLogo] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [backgroundPicture, setBackgroundPicture] = useState(null);

    const handleSubmit = async () => {
        await dispatch(updateOneContent({
            id: content.id,
            title: title.length ? title : content.title,
            description: description.length ? description : content.description,
            logo: logo ? logo : content.logo,
            thumbnail: thumbnail ? thumbnail : content.thumbnail,
            background_picture: backgroundPicture ? backgroundPicture : content.background_picture,
        })).then(result => result.errors ? setErrors(result.errors) : history.push(`/content/${result.id}`));
    }

    useEffect(() => {
        (async () => await dispatch(getOneContent(contentId)).then(() => setLoaded(true)))();
    }, [dispatch, contentId]);

    if (!loaded) return null;
    if (!user.profiles.length) return <Redirect to='/create-profile' />;

    return (
        <div id='edit-content'>
            <nav>
                <img onClick={() => history.push('/')} style={{ width: 100, marginLeft: 40, cursor: 'pointer' }} src={disneyPlusLogo} alt=''></img>
                <button id='cancel' onClick={() => history.push(`/content/${content.id}`)}>Cancel</button>
                <h1>Step {step} / 2</h1>
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
                    <div className='edit-content' id='edit-content-1'>
                        <h1>Title:</h1>
                        <input defaultValue={content.title} onChange={e => setTitle(e.target.value)} type='text'></input>
                        <h1>Description:</h1>
                        <textarea defaultValue={content.description} onChange={e => setDescription(e.target.value)} ></textarea>
                    </div>
                ) : null
            }
            {
                step === 2 ? (
                    <div className='edit-content' id='edit-content-2'>
                        <div id='inputs'>
                            <div className='errors'>
                                {
                                    errors.map((error, idx) => <p key={idx}>{error}</p>)
                                }
                            </div>
                            <input onChange={e => {
                                setLogo(e.target.files[0]);
                                const reader = new FileReader();
                                reader.onloadend = () => setLogoPreview(reader.result);
                                reader.readAsDataURL(e.target.files[0]);
                            }} accept='image/*' type="file" id="logo" className="input-file" style={{ visibility: 'hidden' }} />
                            <label htmlFor="logo">Change logo</label>
                            <input onChange={e => {
                                setThumbnail(e.target.files[0]);
                                const reader = new FileReader();
                                reader.onloadend = () => setThumbnailPreview(reader.result);
                                reader.readAsDataURL(e.target.files[0]);
                            }} accept='image/*' type="file" id="thumbnail" className="input-file" style={{ visibility: 'hidden' }} />
                            <label htmlFor="thumbnail">Change thumbnail</label>
                            <input onChange={e => {
                                setBackgroundPicture(e.target.files[0]);
                                const reader = new FileReader();
                                reader.onloadend = () => setBackgroundPicturePreview(reader.result);
                                reader.readAsDataURL(e.target.files[0]);
                            }} accept='image/*' type="file" id="background-image" className="input-file" style={{ visibility: 'hidden' }} />
                            <label htmlFor="background-image">Change Background Image</label>
                            <button className='submit' onClick={handleSubmit}>Submit</button>
                            <button id='delete' onClick={async () => {
                                await fetch(`/api/contents/${content.id}`, { method: 'DELETE' }).then(() => history.push('/'));
                            }}>Delete</button>
                        </div>
                        <div id='content-assets'>
                            <div className='content-asset'>
                                <p>Logo</p>
                                <img src={logoPreview ? logoPreview : content.logo} alt=''></img>
                            </div>
                            <div className='content-asset'>
                                <p>Thumbnail</p>
                                <img src={thumbnailPreview ? thumbnailPreview : content.thumbnail} alt=''></img>
                            </div>
                            <div className='content-asset'>
                                <p>Background Picture</p>
                                <img src={backgroundPicturePreview ? backgroundPicturePreview : content.background_picture} alt=''></img>
                            </div>
                        </div>
                    </div>
                ) : null
            }
            {
                step < 2 ? (
                    <div onClick={() => setStep(step + 1)} id='next-right'>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                ) : null
            }
        </div>
    );
}

export default EditContent;
