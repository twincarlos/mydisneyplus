import './EditProfile.css';

import { Modal } from "../../../context/Modal";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';
import avatars from '../avatars';
import disneyPlusLogo from '../../../assets/disney-plus-logo.png';

import { updateOneProfile, deleteOneProfile } from '../../../store/session';

function EditProfile () {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [profileEdit, setProfileEdit] = useState(null);
    const [error, setError] = useState('');
    const user = useSelector(state => state.session.user);
    const history = useHistory();

    if (!user.profiles.length) return <Redirect to='/create-profile' />;

    return (
        <div id='edit-profile'>
            <nav>
                <img style={{ width: 100, marginLeft: 40 }} src={disneyPlusLogo} alt=''></img>
                <button onClick={() => {
                    setProfileEdit(null);
                    setError('');
                    history.push('/profiles');
                }}>DONE</button>
            </nav>
            <div id='profile-to-edit'>
                <span>
                    <h1>Edit Profiles</h1>
                    <h2>Select a profile to edit</h2>
                </span>
                <div id='profile-list'>
                    {
                        user.profiles.map(profile => (
                            <div onClick={() => {
                                setProfileEdit({ profileId: profile.id, name: profile.name, avatar: profile.avatar });
                                setShowModal(true);
                            }} className='edit-user-profile' key={profile.id}>
                                <img src={profile.avatar} alt=''></img>
                                <p>{profile.name}</p>
                                <button><i className="fas fa-pencil-alt"></i></button>
                            </div>
                        ))
                    }
                    {
                        user.profiles.length < 5 &&
                        <div className='user-profile'>
                            <i onClick={() => {
                                setProfileEdit(null);
                                setError('');
                                history.push('/create-profile');
                            }} className="fas fa-plus"></i>
                            <p>Add Profile</p>
                        </div>
                    }
                </div>
            </div>
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div id='edit-profile-modal'>
                            {
                                error && <p>{error}</p>
                            }
                            <div id='current-profile-edit'>
                                <img style={{ width: 150, marginBottom: 20 }} src={profileEdit.avatar} alt=''></img>
                                <input value={profileEdit.name} onChange={e => setProfileEdit({ profileId: profileEdit.profileId, name: e.target.value, avatar: profileEdit.avatar })}></input>
                            </div>
                            <div>
                                <p style={{ fontSize: 30 }}>Change avatar</p>
                                <div id='avatar-list' style={{ textAlign: 'left' }}>
                                    {
                                        Object.entries(avatars).map(([category, avatars], idx) => (
                                                <div key={idx}>
                                                    <p style={{ fontSize: 20, paddingLeft: 15 }}>{category}</p>
                                                    {
                                                        avatars.map((avatar, i) => <img onClick={() => setProfileEdit({ profileId: profileEdit.profileId, name: profileEdit.name, avatar })} className={ profileEdit.avatar === avatar ? 'current' : null } src={avatar} key={i} alt=''></img>)
                                                    }
                                                </div>
                                        ))
                                    }
                                </div>
                                <div id='options' style={{ marginTop: 20 }}>
                                    <button style={{ backgroundColor: '#0072D2' }} onClick={async () => {
                                        await dispatch(updateOneProfile(profileEdit)).then(result => {
                                            if (result.error) setError(result.error)
                                            else {
                                                setShowModal(false);
                                                setProfileEdit(null);
                                            }
                                        });
                                    }}>Save</button>
                                    <button style={{ backgroundColor: '#ff3c5c' }} onClick={async () => {
                                        await dispatch(deleteOneProfile(profileEdit.profileId)).then(result => result.error ? setError(result.error) : setShowModal(false));
                                        setProfileEdit(null);
                                    }}>Delete</button>
                                    <button style={{ backgroundColor: '#F9F9F91A' }} onClick={() => {
                                        setProfileEdit(null);
                                        setShowModal(false);
                                        setError('');
                                    }}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )
            }
        </div>
    );
}

export default EditProfile;
