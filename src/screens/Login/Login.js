import { Component } from 'react';
import utilities from '../../utilities/utilities'
import Title from '../../component/funcComponents/Title';
import ClassInputBox from '../../component/classComponents/ClassInputBox/ClassInputBox';
import ClassButton from '../../component/classComponents/ClassButton/ClassButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props)
    this.element = <FontAwesomeIcon icon={faEye} />
    this.elementDropper = <FontAwesomeIcon icon={faEyeSlash} />
    this.state = {
      errorUser: false,
      type: 'password',
      iconVision: this.element,
    }
  }

  handleUsername = (e) => { this.elemU = e }
  handlePassword = (e) => { this.elemP = e }

  handleShowpsw = () => {
    let types = ''
    let icon = null
    if (this.state.type === 'password') {
      types = 'text'
      icon = this.element
    } else {
      types = 'password'
      icon = this.elementDropper
    }
    this.setState({
      type: types,
      iconVision: icon
    })
  }

  handleOnClickLogin = (e) => {
    let warning = false;
    if (!utilities.checkEmailValidity(this.elemU) || !this.elemP || this.elemP.length < 5) {
      warning = true
    } else {
      this.props.history.push("/homepage")
    }

    this.setState({
      errorUser: warning
    })

    console.log(utilities.checkEmailValidity(this.elemU))

  }


  render() {
    return (
      <>
        <Title title={"Login"} subtitle={"Have an account?"} />

        <div className="mainForm">
          <div className="Container-form">


            <ClassInputBox
              placeholder={'Username'}
              name={'Username'}
              type={'email'}
              maxlength={24}
              callbackInput={this.handleUsername}
              cssName={'text'}
            />

            <div className='Container-password'>
              <div>
                <ClassInputBox
                  placeholder={'Password'}
                  name={'Password'}
                  type={this.state.type}
                  callbackInput={this.handlePassword}
                  maxlength={24}
                  cssName={'text'}
                />
              </div>
              <ClassButton
                label={this.state.iconVision}
                cssName={'Vision'}
                callbackButton={this.handleShowpsw}
              />
            </div>

            <div>
              {
                this.state.errorUser === true &&
                <p className="errorText">Email o password errate o mancanti</p>
              }
            </div>

            <ClassButton
              label={'SIGN IN'}
              cssName={'Sign-in'}
              callbackButton={this.handleOnClickLogin}
            />
          </div>

          <div className='Check' >
            <span>
              <input type='checkbox' id='RememberMe' />
              <label htmlFor='RememberMe'>Remember Me</label>
            </span>

            <Link to="/forgotpassword" style={{ color: 'white', textDecoration: 'none' }}>Forgot Password</Link>
          </div>

          <div className='signWith'>
            <span>— Don't have an account? — </span>
          </div>

          <div className='signWith'>
            <Link to="/registration" style={{ color: 'white', textDecoration: 'none' }}>Sign up</Link>
          </div>

          <div className='signWith'>
            <span>— Or Sign In With —</span>
          </div>

          <div className="socialButtons">
            <ClassButton
              label={'Facebook'}
              cssName={'buttonSocial'}
            />
            <ClassButton
              label={'Twitter'}
              cssName={'buttonSocial'}
            />
          </div>
        </div>

      </>
    );
  }
}

export default Login;
