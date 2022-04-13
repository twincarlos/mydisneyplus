// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const SET_PROFILE = 'session/SET_PROFILE';
const ADD_PROFILE = 'session/ADD_PROFILE';
const UPDATE_PROFILE = 'session/UPDATE_PROFILE';
const DELETE_PROFILE = 'session/DELETE_PROFILE';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const setProfile = profile => ({
  type: SET_PROFILE,
  profile
});

const addProfile = profile => ({
  type: ADD_PROFILE,
  profile
});

const updateProfile = profile => ({
  type: UPDATE_PROFILE,
  profile
});

const deleteProfile = profile => ({
  type: DELETE_PROFILE,
  profile
});

const initialState = { user: null, profile: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
    return data;
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const setOneProfile = profileId => async dispatch => {
  if (profileId) {
    const response = await fetch(`/api/profiles/${profileId}`);
    const profile = await response.json();
    dispatch(setProfile(profile));
    return profile;
  }
}

export const addOneProfile = data => async dispatch => {
  const response = await fetch('/api/profiles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const profile = await response.json();
  if (!profile.error) dispatch(addProfile(profile));
  return profile;
}

export const updateOneProfile = data => async dispatch => {
  const response = await fetch(`/api/profiles/${data.profileId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const profile = await response.json();
  if (!profile.error) dispatch(updateProfile(profile));
  return profile;
}

export const deleteOneProfile = profileId => async dispatch => {
  const response = await fetch(`/api/profiles/${profileId}`, {
    method: 'DELETE'
  });
  const profile = await response.json();
  if (!profile.error) dispatch(deleteProfile(profile));
  return profile;
}

export const signUp = (username, email, password, repeatPassword, profilePicture) => async (dispatch) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("repeat_password", repeatPassword);
  formData.append("profile_picture", profilePicture);

  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: formData
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      state.user = action.payload;
      return state;
    case REMOVE_USER:
      state.user = null;
      return state;
    case SET_PROFILE:
      state.profile = action.profile;
      state.user.current_profile_id = action.profile.id;
      return state;
    case ADD_PROFILE:
      state.user.profiles = [...state.user.profiles, action.profile]
      return state;
    case UPDATE_PROFILE:
      if (state.profile.id === action.profile.id) state.profile = action.profile;
      state.user.profiles = state.user.profiles.map(profile => profile.id === action.profile.id ? action.profile : profile);
      return state;
    case DELETE_PROFILE:
      if (state.profile.id === action.profile.id) state.profile = null;
      if (state.user.current_profile_id === action.profile.id) state.user.current_profile_id = null;
      state.user.profiles = state.user.profiles.filter(profile => profile.id !== action.profile.id);
      return state;
    default:
      return state;
  }
}
