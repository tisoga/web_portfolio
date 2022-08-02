import { SELECT_PROJECT, SET_VISIBLE_MODAL } from "../actions/Project";

const initialState = {
    isVisibleModal: false,
    selectedProject: ''
}

const reducer = (state = initialState, action) => {
    let newState = ''
    switch (action.type) {
        case SET_VISIBLE_MODAL:
            newState = { ...state, isVisibleModal: action.payload }
            return newState
        case SELECT_PROJECT:
            newState = { ...state, selectedProject: action.payload }
            return newState
        default:
            return state;
    }
}

export default reducer