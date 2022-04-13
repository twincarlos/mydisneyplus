import './ProfilePage.css';
import SelectProfile from './SelectProfile';
import CreateProfile from './CreateProfile';
import EditProfile from './EditProfile';

import { useSelector } from 'react-redux';
import { useState } from 'react';

function ProfilePage () {
    const [addProfile, setAddProfile] = useState(false);
    const [editProfile, setEditProfile] = useState(false);
    const user = useSelector(state => state.session.user);

    if (!user.profiles.length || addProfile) return <CreateProfile user={user} setAddProfile={setAddProfile} />;
    if (editProfile) return <EditProfile user={user} setEditProfile={setEditProfile} />;
    return <SelectProfile user={user} setAddProfile={setAddProfile} setEditProfile={setEditProfile}/>;
}

export default ProfilePage;
