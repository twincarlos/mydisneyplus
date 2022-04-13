import './EditProfile.css';

import { Modal } from "../../../context/Modal";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import avatars from '../avatars';

import { updateOneProfile, deleteOneProfile } from '../../../store/session';

function EditProfile ({ user, setEditProfile }) {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [profileEdit, setProfileEdit] = useState(null);

    return (
        <div>
            {
                user.profiles.map(profile => (
                    <div key={profile.id}>
                        <img style={{ width: 100 }} src={profile.avatar} alt=''></img>{profile.name}
                        <button onClick={() => {
                            setProfileEdit({ profileId: profile.id, name: profile.name, avatar: profile.avatar });
                            setShowModal(true);
                        }}>Edit</button>
                    </div>
                ))
            }
            {
                showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <div>
                            <img style={{ width: 100 }} src={profileEdit.avatar} alt=''></img>
                            <input value={profileEdit.name} onChange={e => setProfileEdit({ profileId: profileEdit.profileId, name: e.target.value, avatar: profileEdit.avatar })}></input>
                        </div>
                        <div>
                            <p>Select an avatar</p>
                            {
                               Object.entries(avatars).map(([category, avatars], idx) => (
                                    <div key={idx}>
                                        {category}
                                        {
                                            avatars.map((avatar, i) => <img onClick={() => setProfileEdit({ profileId: profileEdit.profileId, name: profileEdit.name, avatar })} style={{ width: 100 }} src={avatar} key={i} alt=''></img>)
                                        }
                                    </div>
                               ))
                            }
                            <button onClick={async () => {
                                await dispatch(updateOneProfile(profileEdit)).then(() => setShowModal(false));
                            }}>Save</button>
                            <button onClick={async () => {
                                await dispatch(deleteOneProfile(profileEdit.profileId)).then(() => setShowModal(false));
                            }}>Delete</button>
                        </div>
                    </Modal>
                )
            }
            <button onClick={() => setEditProfile(false)}>Done</button>
        </div>
    );
}

export default EditProfile;
