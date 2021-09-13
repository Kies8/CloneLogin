import { Component } from "react";
import './ClassButton.css'

export default class ClassButton extends Component {
    onClickButton = () => {
        this.props.callbackButton()
    }

    render() {
        return (
            <div className={this.props.cssName} onClick={this.onClickButton}>
                {this.props.label}
            </div>
        )
    }
}

ClassButton.defaultProps = {
    label: 'press',
}
