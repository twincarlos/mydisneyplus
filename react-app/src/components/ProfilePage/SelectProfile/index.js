import './SelectProfile.css';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setOneProfile } from '../../../store/session';

function SelectProfile ({ user, setAddProfile, setEditProfile }) {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div>
            <button onClick={() => setEditProfile(true)}>Edit</button>
            <h1>Select a profile</h1>
            {
                user.profiles.map(profile => (
                    <div key={profile.id}>
                        <img onClick={async () => await dispatch(setOneProfile(profile.id)).then(() => history.push('/'))} style={{ width: 100 }} src={profile.avatar} alt=''></img>
                        {profile.name}
                    </div>
                ))
            }
            <div>
                <button onClick={() => setAddProfile(true)}>+</button>
            </div>
        </div>
    );
}

export default SelectProfile;
