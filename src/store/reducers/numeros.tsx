import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from '../actions/actionTypes'
import { AlterarNumeroAction } from '../actions/numeros'
import { NumerosReducer } from '../storeConfig'

const initialState:NumerosReducer['numeros'] = {
    min: '1',
    max: '10'
}

export function mapStateToProps (state:NumerosReducer){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default function(state = initialState, action:AlterarNumeroAction) {
    switch(action.type) {
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
        default:
            return state
    }
}