import { TOGGLELANG, TOGGLEMENU, SETLANG } from '../actions/MenuBar';

const initialState = {
    menuBarIsOpen: false,
    langMenuIsOpen: false,
    langSelected: 'English'
}

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case TOGGLEMENU:
            newState = { ...state, menuBarIsOpen: !state.menuBarIsOpen }
            return newState
        case TOGGLELANG:
            newState = { ...state, langMenuIsOpen: !state.langMenuIsOpen }
            return newState
        case SETLANG:
            newState = { ...state, langSelected: action.payload }
            return newState
        default:
            return state
    }
}

export default reducer