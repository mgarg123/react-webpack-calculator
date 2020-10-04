import { CALC_TYPE } from '../type/calcType.js'
import { VAL_1_TYPE } from '../type/val1Type.js'

let initialState = {
    val1: "",
    val2: ""
}

function calcReducer(state = initialState, action) {
    switch (action.type) {
        case CALC_TYPE:
            return {
                ...state,
                val2: action.payload
            }
        case VAL_1_TYPE:
            return {
                ...state,
                val1: action.payload
            }
        default:
            return state
    }
}

export default calcReducer