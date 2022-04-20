import './CreateProfile.css';
import avatars from '../avatars';
import disneyPlusLogo from '../../../assets/disney-plus-logo.png';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addOneProfile } from '../../../store/session';

function CreateProfile ({ user }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [error, setError] = useState('');

    return (
        <div id='create-profile'>
            <nav>
                <img onClick={() => history.push('/')} style={{ width: 100, marginLeft: 40, cursor: 'pointer' }} src={disneyPlusLogo} alt=''></img>
                <span>
                    <button onClick={async () => await dispatch(addOneProfile({ name, avatar })).then(result => result.error ? setError(result.error) : history.push('/profiles'))} style={{ backgroundColor: '#0072D2' }}>SAVE</button>
                    { user.profiles.length ? <button onClick={() => {
                        history.push('/profiles');
                        setError('');
                    }} style={{ backgroundColor: '#40424A' }}>CANCEL</button> : null }
                </span>
            </nav>
            <div>
                { error && <p style={{ fontSize: 30 }}>{error}</p> }
                <h1>What is your name?</h1>
                <input value={name} onChange={e => setName(e.target.value)}></input>
                <h1 style={{ marginBottom: 50 }}>Choose Avatar</h1>
                {
                    Object.entries(avatars).map(([category, avatars], idx) => (
                        <div className='avatar-category' key={idx}>
                            <p style={{ fontSize: 30 }}>{category}</p>
                            { avatars.map((avatarSrc, i) => <img onClick={() => setAvatar(avatarSrc)} className={avatar === avatarSrc ? 'current' : null} src={avatarSrc} key={i} alt=''></img>) }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CreateProfile;
