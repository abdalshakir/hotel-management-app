import React from 'react'

const SignUp = () => {
    return (
        <div className="wrapper fadeInDown mt-5">
            <div id="formContent">
                <h2 className="active"> Sign Up </h2>
                <form>
                    <input type="text" id="username" className="fadeIn second" name="login" placeholder="username" />
                    <input type="text" id="email" className="fadeIn second" name="login" placeholder="email" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Sign In" />
                </form>
            </div>
        </div>
    )
}

export default SignUp
