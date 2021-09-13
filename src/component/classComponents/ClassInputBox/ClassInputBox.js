import { Component } from "react"
import './ClassInputBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default class ClassInputBox extends Component {
    constructor(props) {
        super(props)
        this.element = <FontAwesomeIcon icon={faEye} />
        this.elementDropper = <FontAwesomeIcon icon={faEyeSlash} />
    }

    handleInputBox = (e) => {
        this.props.callbackInput(e.target.value)
    }

    render() {
        return (
            <div style = {this.props.style}>
                <input
                    className={this.props.cssName}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    type={this.props.type}
                    onChange={this.handleInputBox}
                    value={this.props.value}
                    maxLength={this.props.maxlength}
                    id={this.props.id}
                    required
                />
                <label htmlFor={this.props.id}>{this.props.label}</label>
            </div>
        )
    }
}
