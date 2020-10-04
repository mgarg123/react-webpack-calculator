export default function validatePosNeg(expr) {
    expr = expr.substr(0, expr.length - 3)

    let match = expr.match(/[^\d]\d+$/)

    if (expr.length === 0) {
        expr += '-'
    } else if (expr.length === 1 && expr.match(/\d/)) {
        expr = "-" + expr
    } else {
        if (expr.charAt(match.index) === '-' && (expr.charAt(match.index - 1).match(/[\s0-9]/))) {
            expr = expr.substr(0, match.index) + "+" + expr.substr(match.index + 1)
        } else if (expr.charAt(match.index) === '-') {
            expr = expr.substr(0, match.index) + "" + expr.substr(match.index + 1)
        } else if (expr.charAt(match.index) === 'x' || expr.charAt(match.index) === '÷' || expr.charAt(match.index) === '%') {
            expr = expr.substr(0, match.index + 1) + "-" + expr.substr(match.index + 1)
        } else if (expr.charAt(match.index) === '+') {
            expr = expr.substr(0, match.index) + "-" + expr.substr(match.index + 1)
        }
    }

    return expr
}