import './CreateProfile.css';
import avatars from '../avatars';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addOneProfile } from '../../../store/session';

function CreateProfile ({ user, setAddProfile }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        user.profiles.length ? await dispatch(addOneProfile({ name, avatar })).then(result => result.error ? setError(result.error) : setAddProfile(false)) : await dispatch(addOneProfile({ name, avatar })).then(result => result.error ? setError(result.error) : history.push('/profiles'));
    }

    return (
        <div id='profile-selection'>
            { error && <p>{error}</p> }
            <h1>Select an Avatar!</h1>
            {
                Object.entries(avatars).map(([category, avatars], idx) => (
                    <div key={idx}>
                        {category}
                        { avatars.map((avatarSrc, i) => <img onClick={() => setAvatar(avatarSrc)} style={{ width: 100 }} src={avatarSrc} key={i} alt=''></img>) }
                    </div>
                ))
            }

            <h1>What is your name?</h1>
            <input value={name} onChange={e => setName(e.target.value)}></input>

            <button onClick={handleSubmit}>Save</button>
            { user.profiles.length ? <button onClick={() => {
                setAddProfile(false);
                setError('');
            }}>Cancel</button> : null }
        </div>
    );
}

export default CreateProfile;
