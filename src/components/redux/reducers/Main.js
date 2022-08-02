import { GETABOUTME, GETDATALANG, GETPORTFOLIOSETTINGS, GETSKILLLIST, SETPORTFOLIODATA } from "../actions/Main";

const initialState = {
    languageList: {},
    portfolioSettings: {},
    skillList: [],
    portfolioData: [],
    aboutMe: {}
}

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GETDATALANG:
            newState = { ...state, languageList: action.payload }
            return newState
        case GETSKILLLIST:
            newState = { ...state, skillList: action.payload }
            return newState
        case GETPORTFOLIOSETTINGS:
            newState = { ...state, portfolioSettings: action.payload }
            return newState
        case SETPORTFOLIODATA:
            const oldData = [...state.portfolioData]
            oldData.push(action.payload)
            newState = { ...state, portfolioData: oldData }
            return newState
        case GETABOUTME:
            newState = { ...state, aboutMe: action.payload }
            return newState
        default:
            return state
    }
}

export default reducer