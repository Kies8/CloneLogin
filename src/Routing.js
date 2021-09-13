import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";
import './screens/Login/Login.css'
import Login from './screens/Login/Login.js'
import Registration from './screens/Registration/Registration.js'
import Homepage from './screens/Homepage/Homepage.js'

const Routing = () => {
    return (
        <Router>
            <section className="sectionLogin">
                <div className='Container-font'>

                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/registration" component={Registration}></Route>
                        <Route path="/forgotpassword" component={ForgotPassword}></Route>
                        <Route path="/homepage" component={Homepage}></Route>
                    </Switch>
                </div>
            </section>
        </Router>
    )
}
export default Routing;