const GET_CONTENTS = 'content/GET_CONTENTS';
const GET_CONTENT = 'content/GET_CONTENT';
const POST_CONTENT = 'content/POST_CONTENT';
const UPDATE_CONTENT = 'content/UPDATE_CONTENT';

const getContents = contents => ({
    type: GET_CONTENTS,
    contents
});

const getContent = content => ({
    type: GET_CONTENT,
    content
});

const postContent = content => ({
    type: POST_CONTENT,
    content
})

const updateContent = content => ({
    type: UPDATE_CONTENT,
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

export const postOneContent = data => async dispatch => {
    const formData = new FormData();
    formData.append('content_type', data.content_type);
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('media', data.media);
    formData.append('logo', data.logo);
    formData.append('thumbnail', data.thumbnail);
    formData.append('background_picture', data.background_picture);
    formData.append('categories', data.categories);

    const response = await fetch('/api/contents', {
        method: 'POST',
        body: formData
    });

    const content =  await response.json();

    if (content.errors) {
        return content.errors;
    } else {
        dispatch(postContent(content));
        return content;
    }
}

export const updateOneContent = data => async dispatch => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('logo', data.logo);
    formData.append('thumbnail', data.thumbnail);
    formData.append('background_picture', data.background_picture);

    const response = await fetch(`/api/contents/${data.id}`, {
        method: 'PUT',
        body: formData
    });

    const content =  await response.json();

    if (content.errors) {
        return content.errors;
    } else {
        dispatch(updateContent(content));
        return content;
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_CONTENTS:
            state.contents = action.contents;
            return state;
        case GET_CONTENT:
            state.content = action.content;
            return state;
        case POST_CONTENT:
            state.content = action.content;
            return state;
        case UPDATE_CONTENT:
            state.content = action.content;
            return state;
        default:
            return state;
    }
}
