import { createStore } from 'redux';
import rootRedcuer from './reducers';

const store = createStore(rootRedcuer)

export default store