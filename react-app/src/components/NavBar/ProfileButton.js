import './NavBar.css';

import LogoutButton from '../auth/LogoutButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { setOneProfile } from '../../store/session';

function ProfileButton ({ user, profile }) {
    const [showMenu, setShowMenu] = useState('none');
    const dispatch = useDispatch();
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
                        user.profiles.map(userProfile => (
                            userProfile.id !== profile.id &&
                            <span onClick={() => dispatch(setOneProfile(userProfile.id))} className='user-profile' key={userProfile.id}>
                                <img style={{ width: 60, marginRight: 15 }} src={userProfile.avatar} alt=''></img>
                                <p>{userProfile.name}</p>
                            </span>
                        ))
                    }
                    {
                        user.profiles.length < 5 && <span className='user-profile' onClick={() => history.push('/create-profile')}>
                            <i className="fas fa-plus"></i>
                            <p>Add Profile</p>
                        </span>
                    }
                </div>
                <NavLink to='/edit-profile' exact={true} activeClassName='active'>
                    Edit Profiles
                </NavLink>
                <LogoutButton />
            </div>
        </div>
    );
}

export default ProfileButton;
