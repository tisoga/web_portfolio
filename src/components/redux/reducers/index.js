import { combineReducers } from 'redux';
import MenuBarReducer from './MenuBar';
import ProjectReducer from './Project';
import MainReducer from './Main'

const rootRedcuer = combineReducers({
    MenuBarReducer,
    ProjectReducer,
    MainReducer
})

export default rootRedcuer