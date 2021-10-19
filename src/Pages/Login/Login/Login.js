import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Components/Hooks/useAuth';
import { useLocation, useHistory } from "react-router-dom";
import { Form } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    const { signInUsingGoogle, setIsLoading, error, setError, signInEmailPassword } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home";


    ///////////////////Handle Google Login//////////////////////

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

    ///////////////////Handle Login email and password //////////////////////

    const handleLoginEmailPassword = (e) => {
        e.preventDefault();
        signInEmailPassword(email, password)
            .then((userCredential) => {
                history.push(redirect_uri)
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => setIsLoading(false))
        e.target.reset();
    }


    return (
        <div className=" LoginContainer">
            <h1 className=" text-pink-600 text-center mb-6 pt-36 fw-bold">Welcome to <span className=' text-yellow-300'>Login</span></h1>

            <div className="d-flex justify-center text-green-500">
                <div style={{ width: '340px' }}>
                    <Form onSubmit={handleLoginEmailPassword}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onBlur={emailChange} type="email" placeholder="Enter email" className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                            <Form.Text className="text-muted text-red-500">
                                {error}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required onBlur={passwordChange} type="password" placeholder="Password" />
                        </Form.Group>

                        <div className='text-center mb-6'>

                            <button style={{ width: '340px' }} className='btn  btn-warning text-center' type="submit">
                                Submit
                            </button>
                        </div>
                    </Form>
                </div>
            </div>

            {/* ---------------------------------------------------------------------------------- */}
            <div className="text-center  text-purple-500 pb-10 fw-bold">
                <h4>---------- or ---------</h4>
                <button style={{ width: '340px' }} onClick={handleGoogleLogin} className='btn btn-primary '>Google Login</button>

                <div className="mt-5">
                    <NavLink to="/register" className='text-decoration-none '><h5>New User? <span className='text-pink-500'>Please Register</span></h5></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Login;