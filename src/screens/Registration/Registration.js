// import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react"
import Title from '../../component/funcComponents/Title';
import ClassInputBox from '../../component/classComponents/ClassInputBox/ClassInputBox';
import ClassButton from '../../component/classComponents/ClassButton/ClassButton';
import utilities from '../../utilities/utilities';
import { Link } from 'react-router-dom';
import Select from "../../component/funcComponents/Select";
import './Registration.css';


export default class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errorUser: false,
            customer: {
                name: '',
                surname: '',
                date: '',
                gender: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
            // customers:[]
        }

    }

    handleName = (e) => { this.name = e }
    handleSurname = (e) => { this.surname = e }
    handleEmail = (e) => { this.email = e }
    handlePassword = (e) => { this.password = e }
    handleConfirmPassword = (e) => { this.confirmPassword = e }
    handleDate = (e) => { this.date = e }
    handleGender = (e) => { this.gender = e }

    handleSubmit = (e) => {
        if (
            utilities.checkPersonal(this.name) &&
            utilities.checkPersonal(this.surname) &&
            utilities.checkEmailValidity(this.email) &&
            utilities.checkPasswordValidity(this.password) &&
            utilities.checkConfirmPasswordValidity(this.password, this.confirmPassword) &&
            utilities.checkGender(this.gender) &&
            utilities.checkDate(this.date)) {
            this.customerTemp = {
                name: this.name,
                surname: this.surname,
                date: this.date,
                gender: this.gender,
                email: this.email,
                password: this.password,
                confirmPassword: this.confirmPassword
            }

            console.log(this.customerTemp)
            this.setState({
                customer: {
                    name: this.name,
                    surname: this.surname,
                    date: this.date,
                    gender: this.gender,
                    email: this.email,
                    password: this.password,
                    confirmPassword: this.confirmPassword
                }
            })
            this.props.history.push("/homepage");
        } else {
            console.log("registrazione fallita")
            this.setState({
                errorUser: true
            })
        }
    }

    render() {
        return (
            <>
                <Title title={"Register an account"} subtitle={"Don't have an account?"} />
                <div className="mainForm">
                    <div className="Container-form">

                        <div className="personal">
                            <ClassInputBox
                                placeholder={'Name'}
                                name={'Name'}
                                type={'text'}
                                callbackInput={this.handleName}
                                maxlength={24}
                                cssName={'text'}
                            />
                            <ClassInputBox
                                placeholder={'Surname'}
                                name={'Surname'}
                                type={'text'}
                                callbackInput={this.handleSurname}
                                maxlength={24}
                                cssName={'text'}
                            />
                        </div>

                        <div className="data-gender">
                            <ClassInputBox
                                name={'dob'}
                                type={'date'}
                                callbackInput={this.handleDate}
                                maxlength={24}
                                cssName={'text'} />
                            <Select callbackSelectGender={this.handleGender} />
                        </div>

                        <div className="personal">
                            <ClassInputBox
                                placeholder={'Email'}
                                name={'Email'}
                                type={'email'}
                                callbackInput={this.handleEmail}
                                cssName={'text'}
                            />
                            <ClassInputBox
                                placeholder={'Password'}
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
                            label={'SIGN UP'}
                            cssName={'Sign-in'}
                            callbackButton={this.handleSubmit}
                        />
                    </div>

                    <div className='signWith'>
                        <span>— Have an account? — </span>
                    </div>
                    <div className='signWith'>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Sign in</Link>
                    </div>

                </div>
            </>
        )
    }
}

