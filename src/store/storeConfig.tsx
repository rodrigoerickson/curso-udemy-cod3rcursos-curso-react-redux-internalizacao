import { createStore, combineReducers, bindActionCreators } from 'redux';
import numerosReducer from './reducers/numeros';

export interface NumerosReducer{
    numeros:{
        max:string,
        min:string
    },
}

const reducers = combineReducers({
    numeros:numerosReducer,
});

function storeConfig () {
    return createStore(reducers);
}

export default storeConfig;