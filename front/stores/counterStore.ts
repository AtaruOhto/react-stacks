import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from 'reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension';
import {counterSagaMiddleware} from 'sagas/counterSaga'

const initialState = {};

const composeMiddleware = () => {
    const middleware = [
        counterSagaMiddleware
    ];

    const composed = compose(
        applyMiddleware(...middleware)
    );

    const composeWithReduxDevTool = composeWithDevTools({/* Options */});
    return process.env.NODE_ENV === 'production' ? composed : composeWithReduxDevTool(composed);
};

export const counterStore = createStore(
    rootReducer,
    initialState,
    composeMiddleware()
);
