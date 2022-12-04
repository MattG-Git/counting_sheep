import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { LOGIN_USER, CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';



function LoginForm() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
    const [createUser, { error2 }] = useMutation(CREATE_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
        setFormState({
            username: '',
            password: '',
        });
        navigate('/');
    };

    const handleFormSubmit2 = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await createUser({
                variables: { ...formState },
            });
            Auth.login(data.createUser.token);
        } catch (e) {
            console.error(e);
        }
        setFormState({
            username: '',
            password: '',
        });
        navigate('/');
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return(
        <div className="container m-5">
            <div className="row">
                <div className="col-6 login">
                    <h3>Log In</h3>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3">
                            <label for="InputUserName" className="form-label custom2">Username</label>
                            <input
                                className="form-control"
                                placeholder="Your username"
                                name="username"
                                type="username"
                                id="usernameLogin"
                                value={formState.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword" className="form-label custom2">Password</label>
                            <input
                                className="form-control"
                                placeholder="Your password"
                                name="password"
                                type="password"
                                id="passwordLogin"
                                value={formState.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-warning" type="submit">
                                login
                        </button>
                    </form>
                </div>
                <div className="col-6 signup">
                    <h3> Sign Up</h3>
                    <form onSubmit={handleFormSubmit2}>
                        <div className="mb-3">
                            <label for="InputUserName" className="form-label custom2">Username</label>
                            <input
                                className="form-control"
                                placeholder="Your username"
                                name="username"
                                type="username"
                                id="usernameSignup"
                                value={formState.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="InputPassword" className="form-label custom2">Password</label>
                            <input
                                className="form-control"
                                placeholder="Your password"
                                name="password"
                                type="password"
                                id="passwordSignup"
                                value={formState.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-warning" type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};


export default LoginForm;