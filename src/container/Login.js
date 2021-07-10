import React from 'react';
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="wrapper fadeInDown mt-5">
            <div id="formContent">
                <h2 className="active"> Sign In </h2>
                <form>
                    <input type="text" id="email" className="fadeIn second" name="login" placeholder="email" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

                <div id="formFooter">
                    <Link to='./signup'>
                        <a className="underlineHover" href="#">Create new account</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login
