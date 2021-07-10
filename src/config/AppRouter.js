import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../container/Login';
import Home from '../container/Home';
import SignUp from '../container/SignUp'

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={SignUp} />
            </Switch>
        </Router>
    )
}

export default AppRouter;