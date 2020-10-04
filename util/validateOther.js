export default function validateOther(expr) {
    expr = expr.replaceAll(/^0+(?!$)/g, '')
    expr = expr.replace(/^-0/, '0')
    expr = expr.replaceAll(/(\+[^\d])/g, expr.charAt(expr.length - 1))
    expr = expr.replaceAll(/(-[^\d])/g, expr.charAt(expr.length - 1))
    expr = expr.replaceAll(/(÷[^-0-9])/g, expr.charAt(expr.length - 1))
    expr = expr.replaceAll(/(x[^-0-9])/g, expr.charAt(expr.length - 1))
    expr = expr.replaceAll(/^(x[^-])/g, expr.charAt(expr.length - 1))

    return expr
}