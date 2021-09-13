import { Component } from "react"
import Title from '../../component/funcComponents/Title';
import ClassInputBox from '../../component/classComponents/ClassInputBox/ClassInputBox';
import ClassButton from '../../component/classComponents/ClassButton/ClassButton';
import utilities from '../../utilities/utilities';
import '../Registration/Registration.css';


export default class ForgotPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorUser: false,

        }

    }

    handleButton = (e) => {
        this.code = utilities.generateCode()
        console.log(this.code)
    }
    handleCode = (e) => {this.codeInput = parseInt(e) }
    handlePassword = (e) => { this.password = e }
    handleConfirmPassword = (e) => { this.confirmPassword = e }

    handleSubmit = (e) => {

        if (utilities.checkPasswordValidity(this.password) && utilities.checkConfirmPasswordValidity(this.password, this.confirmPassword) && utilities.checkCode(this.code, this.codeInput)) {
            this.props.history.push("/")
        }else{
            console.log("errore cambiamento password")
            this.setState({
                errorUser: true
            })
        }
    }

    render() {
        return (
            <>
                <Title title={"Forgot password"} subtitle={"Did you forget your password?"} />
                <div className="mainForm">
                    <div className="Container-form">
                        <div className="personal">
                            <ClassButton
                                label={'GENERATE CODE'}
                                cssName={'Sign-in'}
                                callbackButton={this.handleButton}
                            />
                            <ClassInputBox
                                placeholder={'Codice di conferma'}
                                name={'codiceConferma'}
                                type={'number'}
                                min={10} 
                                max={100}
                                callbackInput={this.handleCode}
                                maxlength={24}
                                cssName={'text'}
                            />
                            <ClassInputBox
                                placeholder={'Nuova password'}
                                name={'Password'}
                                type={'password'}
                                callbackInput={this.handlePassword}
                                maxlength={24}
                                cssName={'text'}
                            />
                            <ClassInputBox
                                placeholder={'Conferma password'}
                                name={'Conferma password'}
                                type={'password'}
                                callbackInput={this.handleConfirmPassword}
                                maxlength={24}
                                cssName={'text'}
                            />
                        </div>
                        <div>
                            {
                                this.state.errorUser === true &&
                                <p className="errorText">Dati inseriti errati o mancanti</p>
                            }
                        </div>
                        <ClassButton
                            label={'CONFIRM'}
                            cssName={'Sign-in'}
                            callbackButton={this.handleSubmit}
                        />
                    </div>
                </div>
            </>
        )
    }
}