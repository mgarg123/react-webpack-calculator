function evaluate(expression) {
    expression = expression.replaceAll('x', '*').replaceAll('÷', '/')
    let exprs = expression.split(/[^\d]/)
    for (let i in exprs) {
        exprs[i] = exprs[i].replace(/^0+/, '')
    }


    let newExpr = ""
    let j = 0
    for (let i in expression) {
        if (expression[i].match(/[^\d]/)) {
            newExpr += exprs[j] + expression[i]
            j++
        }

    }

    newExpr += exprs[exprs.length - 1]
    console.log(newExpr)

    let res = 0
    try {
        res = eval(newExpr)
    } catch (exception) {
        console.log(exception.message)
        return "Error"
    }


    return res
}

export default evaluate