import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Components/Hooks/useAuth';
import { useLocation, useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
const Login = () => {
    const { signInUsingGoogle, setIsLoading, error, setError, signInEmailPassword } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/details";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
                setError('')
            })
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);
                setEmail(error.email);

            }).finally(() => {
                setIsLoading(false);
            });

    }

    const emailChange = (e) => setEmail(e.target.value);
    const passwordChange = (e) => setPassword(e.target.value);
    const handleLogin = (e) => {
        e.preventDefault();
        signInEmailPassword(email, password);
        e.target.reset();
    }

    return (
        <div className="mt-10">
            <h1>Login page</h1>

            <div className="d-flex justify-center">
                <div style={{ width: '340px' }}>
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={emailChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted text-red-500">
                                {error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={passwordChange} type="password" placeholder="Password" />
                        </Form.Group>

                        <button type="submit">
                            Submit
                        </button>
                    </Form>
                </div>
            </div>

            {/* ---------------------------------------------------------------------------------- */}
            <button onClick={handleGoogleLogin}>Google Login</button>
            <p>New User? Please <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;