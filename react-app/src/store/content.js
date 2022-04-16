const GET_CONTENTS = 'content/GET_CONTENTS';

const getContents = contents => ({
    type: GET_CONTENTS,
    contents
});

const initialState = { contents: null, content: null };

export const getAllContents = () => async dispatch => {
    const response = await fetch('/api/contents');
    const data = await response.json();
    dispatch(getContents(data.contents));
    return data.contents;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTENTS:
            state.contents = action.contents;
            return state;
        default:
            return state;
    }
}
