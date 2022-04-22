// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const SET_PROFILE = 'session/SET_PROFILE';
const ADD_PROFILE = 'session/ADD_PROFILE';
const UPDATE_PROFILE = 'session/UPDATE_PROFILE';
const DELETE_PROFILE = 'session/DELETE_PROFILE';
const FAVORITE_CONTENT = 'session/FAVORITE_CONTENT';
const UNFAVORITE_CONTENT = 'session/UNFAVORITE_CONTENT';

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

const favoriteContent = favorite => ({
  type: FAVORITE_CONTENT,
  favorite
});

const unfavoriteContent = oldContentId => ({
  type: UNFAVORITE_CONTENT,
  oldContentId
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

export const signUp = (username, email, password, repeatPassword) => async (dispatch) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("repeat_password", repeatPassword);

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
    const response = await fetch(`/api/profiles/set-profile/${profileId}`, { method: 'PUT' });
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

export const favoriteOneContent = (profileId, contentId) => async dispatch => {
  const response = await fetch(`/api/profiles/${profileId}/favorite/${contentId}`, {method: 'POST'});
  const favorite = await response.json();
  dispatch(favoriteContent(favorite));
  return favorite;
}

export const unfavoriteOneContent = (profileId, contentId) => async dispatch => {
  const response = await fetch(`/api/profiles/${profileId}/favorite/${contentId}`, {method: 'DELETE'});
  const oldContentId = await response.json();
  dispatch(unfavoriteContent(oldContentId));
  return oldContentId;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      state.user = action.payload;
      return state;
    case REMOVE_USER:
      state.user = null;
      state.profile = null;
      return state;
    case SET_PROFILE:
      state.profile = action.profile;
      state.user.current_profile_id = action.profile.id;
      return state;
    case ADD_PROFILE:
      state.user.profiles = [...state.user.profiles, action.profile];
      return state;
    case UPDATE_PROFILE:
      if (state.profile?.id === action.profile.id) state.profile = action.profile;
      state.user.profiles = state.user.profiles.map(profile => profile.id === action.profile.id ? action.profile : profile);
      return state;
    case DELETE_PROFILE:
      if (state.profile?.id === action.profile.id) state.profile = null;
      if (state.user.current_profile_id === action.profile.id) state.user.current_profile_id = null;
      state.user.profiles = state.user.profiles.filter(profile => profile.id !== action.profile.id);
      return state;
    case FAVORITE_CONTENT:
      return {
        ...state,
        profile: {
          ...state.profile,
          favorites: [...state.profile.favorites, action.favorite]
        }
      }
    case UNFAVORITE_CONTENT:
      return {
        ...state,
        profile: {
          ...state.profile,
          favorites: state.profile.favorites.filter(favorite => favorite.content.id !== action.oldContentId)
        }
      }
    default:
      return state;
  }
}
