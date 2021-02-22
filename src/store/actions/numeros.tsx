import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes'

export interface AlterarNumeroParamAction {
    novoNumero:number
}

export interface AlterarNumeroAction {
    type: typeof NUM_MIN_ALTERADO | typeof NUM_MAX_ALTERADO,
    payload: AlterarNumeroParamAction['novoNumero']
}

// Action Creator
export function alterarNumeroMinimo(novoNumero:AlterarNumeroParamAction['novoNumero']):AlterarNumeroAction {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}

// Action Creator
export function alterarNumeroMaximo(novoNumero:AlterarNumeroParamAction['novoNumero']):AlterarNumeroAction {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}