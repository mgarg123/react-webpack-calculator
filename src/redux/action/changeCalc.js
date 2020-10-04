import { CALC_TYPE } from '../type/calcType.js'

export function changeCalc(payload) {
    return {
        type: CALC_TYPE,
        payload
    }
}