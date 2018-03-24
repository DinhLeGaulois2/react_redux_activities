import { applyMiddleware, createStore, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import { reducer as reduxFormReducer } from 'redux-form';

import bmiReducer from './reducers/bmi/bmiReducer'
import libraryOfCongressReducer from './reducers/libraryOfCongress/libraryOfCongressReducer'
import rootUIReducer from './reducers/rootUI/rootUIReducer'

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
});

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(combineReducers({
    bmi: bmiReducer,
    congress: libraryOfCongressReducer,
    rootUI: rootUIReducer,
    form: reduxFormReducer // mounted under "form"
}), middleware);