import React, { Component } from 'react'

export class Buttons extends Component {



    render() {
        return (
            <div className="btn-row">
                <button
                    onClick={() => this.props.getClickedButton(this.props.buttonArray[0])}
                >{this.props.buttonArray[0]}</button>
                <button
                    onClick={() => this.props.getClickedButton(this.props.buttonArray[1])}
                >{this.props.buttonArray[1]}</button>
                <button
                    onClick={() => this.props.getClickedButton(this.props.buttonArray[2])}
                >{this.props.buttonArray[2]}</button>
                {
                    this.props.buttonArray[3] && <button
                        style={{ fontSize: `${this.props.buttonArray[3] === "÷" && '1.4em'}` }}
                        onClick={() => this.props.getClickedButton(this.props.buttonArray[3])}
                    >{this.props.buttonArray[3]}</button>
                }

            </div>
        )
    }
}

export default Buttons
