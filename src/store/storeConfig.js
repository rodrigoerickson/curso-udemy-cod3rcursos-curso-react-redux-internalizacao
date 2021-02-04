import { createStore, combineReducers, bindActionCreators } from 'redux';

const reducers = combineReducers({
    numeros:function (state,action){
        switch(actinos.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min:action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min:1,
                    max:10
                }
        }
    }
});

function storeConfig () {
    return createStore(reducers);
}

export default storeConfig;