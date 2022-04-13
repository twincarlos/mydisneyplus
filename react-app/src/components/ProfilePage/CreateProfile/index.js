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

    const handleSubmit = () => {
        if (name.length && avatar.length) {
            user.profiles.length ? dispatch(addOneProfile({ name, avatar })).then(() => setAddProfile(false)) : dispatch(addOneProfile({ name, avatar })).then(() => history.push('/'));
        }
    }

    return (
        <div id='profile-selection'>
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
            { user.profiles.length ? <button onClick={() => setAddProfile(false)}>Cancel</button> : null }
        </div>
    );
}

export default CreateProfile;
