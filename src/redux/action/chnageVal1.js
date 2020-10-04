import { VAL_1_TYPE } from '../type/val1Type.js'

export function changeVal1(payload) {
    return {
        type: VAL_1_TYPE,
        payload
    }
}