import { applyMiddleware, compose, createStore } from 'redux';
import rootreducer from '../reducers/rootReducer/rootReducer';
import logger from 'react-logger';

let finalCreateStore = compose(
    applyMiddleware(logger())
)(createStore)

export default configureStore = ( initialState = [] ) =>{
    return finalCreateStore(rootreducer,initialState)
} 