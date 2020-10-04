import React from 'react'
import '../../static/css/calc.css'
import { connect } from 'react-redux'
import { changeCalc } from '../redux/action/changeCalc.js'
import { changeVal1 } from '../redux/action/chnageVal1.js'
import Buttons from './Buttons.jsx'
import evaluate from '../../util/evaluate.js'
import validatePosNeg from '../../util/validatePosNeg'
import validateOther from '../../util/validateOther'

class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            val1: "",
            val2: ""
        }
    }

    getClickedButton = (button) => {
        let expr = this.state.val2 === "Error" ? "" : this.state.val2 + button
        if (button === "C") {
            this.setState({
                val1: "",
                val2: ""
            })
        } else if (button === "=") {
            if (this.state.val2 !== "") {
                let result = evaluate(this.state.val2)
                result = result.toLocaleString('en-IN')
                let currExpr = this.props.val2
                // this.props.changeCalc(result)
                // this.props.changeVal1(currExpr)
                this.setState((prevState) => ({
                    val1: prevState.val2,
                    val2: result
                }))


            }

        }
        else if (button === '+/-') {
            let exprs = validatePosNeg(expr)

            this.setState({ val2: exprs })
            // this.props.changeCalc(exprs)
        }
        else {
            let exprs = ""
            if (expr !== "") {
                exprs = validateOther(expr)
            } else {
                exprs = expr + button
            }
            this.setState({ val2: exprs })
            // this.props.changeCalc(exprs)

        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.val1 !== prevState.val1) {
            this.props.changeVal1(this.state.val1)
        }
        if (this.state.val2 !== prevState.val2) {
            this.props.changeCalc(this.state.val2)
        }
    }

    render() {
        return (
            <div className="calc-root">
                {/* <input type="number"
                    value={this.state.val}
                    onChange={(event) => this.setState({ val: event.target.value })} />
                <button
                    onClick={() => this.props.changeCalc(this.state.val)}>Change</button>
                <h3>Calculator App {this.props.calc}</h3>

                <h3></h3> */}
                <div className="calc-holder">
                    <div className="calc-body">
                        <div className="calc-input">
                            <input type="text" name="" id="input1"
                                value={this.state.val1}
                                disabled={true}
                            />
                            <input type="text" name="" id="input2"
                                style={{
                                    fontSize: `${this.state.val2.length <= 10 ? '2.6em' :
                                        this.state.val2.length > 10 && this.state.val2.length < 12 ? '2.2em' : '1.5em'}`
                                }}
                                value={this.state.val2}
                                disabled={true}
                            />
                        </div>
                        <div className="calc-buttons">
                            <Buttons
                                buttonArray={['C', '+/-', '%', '÷']}
                                getClickedButton={this.getClickedButton}
                            />
                            <Buttons
                                buttonArray={['7', '8', '9', 'x']}
                                getClickedButton={this.getClickedButton}
                            />
                            <Buttons
                                buttonArray={['4', '5', '6', '-']}
                                getClickedButton={this.getClickedButton}
                            />
                            <Buttons
                                buttonArray={['1', '2', '3', '+']}
                                getClickedButton={this.getClickedButton}
                            />
                            <Buttons
                                buttonArray={['0', '.', '=']}
                                getClickedButton={this.getClickedButton}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        val1: state.val1,
        val2: state.val2
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeCalc: data => dispatch(changeCalc(data)),
        changeVal1: data => dispatch(changeVal1(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)