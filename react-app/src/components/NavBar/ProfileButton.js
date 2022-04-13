import './NavBar.css';

import LogoutButton from '../auth/LogoutButton';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function ProfileButton ({ user, profile }) {
    const [showMenu, setShowMenu] = useState('none');
    const history = useHistory();

    return (
        <div id='profile-button' onMouseEnter={() => setShowMenu('flex')} onMouseLeave={() => setShowMenu('none')}>
            <div id='profile-button-header'>
                <p>{profile.name}</p>
                <img style={{ width: 60, marginLeft: 15 }} src={profile.avatar} alt=''></img>
            </div>
            <div id='profile-button-dropdown' style={{ display: showMenu }}>
                <hr></hr>
                <div id='user-profiles'>
                    {
                        user.profiles.map(profile => (
                            <span className='user-profile' key={profile.id}>
                                <img style={{ width: 60, marginRight: 15 }} src={profile.avatar} alt=''></img>
                                <p>{profile.name}</p>
                            </span>
                        ))
                    }
                    { user.profiles.length < 5 && <span className='user-profile' onClick={() => history.push('/profiles')}>
                        <i className="fas fa-plus"></i>
                        <p>Add Profile</p>
                    </span> }
                </div>
                <NavLink to='/profiles' exact={true} activeClassName='active'>
                    Profiles
                </NavLink>
                <LogoutButton />
            </div>
        </div>
    );
}

export default ProfileButton;
