const GET_CONTENTS = 'content/GET_CONTENTS';
const GET_CONTENT = 'content/GET_CONTENT';

const getContents = contents => ({
    type: GET_CONTENTS,
    contents
});

const getContent = content => ({
    type: GET_CONTENT,
    content
});

const initialState = { contents: null, content: null };

export const getAllContents = () => async dispatch => {
    const response = await fetch('/api/contents');
    const contents = await response.json();
    dispatch(getContents(contents));
    return contents;
}

export const getOneContent = contentId => async dispatch => {
    const response = await fetch(`/api/contents/${contentId}`);
    const content = await response.json();
    dispatch(getContent(content));
    return content;
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTENTS:
            state.contents = action.contents;
            return state;
        case GET_CONTENT:
            state.content = action.content;
            return state;
        default:
            return state;
    }
}
