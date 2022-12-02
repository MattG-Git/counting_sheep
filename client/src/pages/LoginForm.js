import React from 'react';

function LoginForm() {
    return(
        <div className="container m-5">
            <div className="row">
                <div className="col-6 login">
                    <h3>Log In</h3>
                    <form>
                    <div className="mb-3">
                        <label for="InputUserName" className="form-label">Username</label>
                        <input type="text" className="form-control" id="usernameLogin"></input>
                    </div>
                    <div className="mb-3">
                        <label for="InputPassword" className="form-label">Password</label>
                        <input type="password" className="form-control" id="PasswordLogin"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Log In</button>
                    </form>
                </div>
                <div className="col-6 signup">
                    <h3> Sign Up</h3>
                    <form>
                        <div className="mb-3">
                            <label for="InputUserName" className="form-label">Username</label>
                            <input type="text" className="form-control" id="usernameSignup"></input>
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword" className="form-label">Password</label>
                            <input type="password" className="form-control" id="PasswordSignup"></input>
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                </div>
            </div>
        </div>
    )
};

export default LoginForm;