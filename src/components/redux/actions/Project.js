export const SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL';
export const SELECT_PROJECT = 'SELECT_PROJECT';

export const setVisibleModal = (val) => {
    return {
        type: SET_VISIBLE_MODAL,
        payload: val
    }
}

export const selectProject = (id) => {
    return {
        type: SELECT_PROJECT,
        payload: id
    }
}