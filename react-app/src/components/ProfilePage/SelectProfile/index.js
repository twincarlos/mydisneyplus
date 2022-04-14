import './SelectProfile.css';
import disneyPlusLogo from '../../../assets/disney-plus-logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { setOneProfile } from '../../../store/session';

function SelectProfile () {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    return (
        <div id='select-profile'>
            <nav>
                <img style={{ width: 100, marginLeft: 40 }} src={disneyPlusLogo} alt=''></img>
                <button onClick={() => history.push('/edit-profile')}>EDIT PROFILES</button>
            </nav>
            <div id='whos-watching'>
                <h1>Who's Watching?</h1>
                <div id='profile-list'>
                    {
                        user.profiles.map(profile => (
                            <div className='user-profile' key={profile.id}>
                                <img onClick={async () => await dispatch(setOneProfile(profile.id)).then(() => history.push('/'))} src={profile.avatar} alt=''></img>
                                <p>{profile.name}</p>
                            </div>
                        ))
                    }
                    <div className='user-profile'>
                        <i onClick={() => history.push('create-profile')} className="fas fa-plus"></i>
                        <p>Add Profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectProfile;
