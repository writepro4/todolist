import {combineReducers} from 'redux';
import counter from './counter';
import todos from './toods';

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;