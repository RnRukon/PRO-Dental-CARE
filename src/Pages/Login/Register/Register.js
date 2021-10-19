import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Components/Hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../../../Components/FireBase/Firebase.init';
import './Register.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';

initializeAuthentication()

const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { signInUsingGoogle, setError, error, setUser } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const redirect_uri = location.state?.from || "/home";

    const emailChange = (event) => setEmail(event.target.value);
    const passwordChange = (event) => setPassword(event.target.value);
    const nameChange = (event) => setName(event.target.value);






    // const provider = new GoogleAuthProvider();
    // from control----------------------------
    const handleRegistration = (e) => {
        e.preventDefault()
        if (password.length < 6) {
            setError('Password Must be at least 6 characters log')
            return;
        }
        registerNewUser(email, password)

        e.target.reset();

    } //register---------------------
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result => {
                const user = result.user;
                setUser(user)
                setUserName();
                setError('');
                history.push(redirect_uri)
            })).catch((error) => {
                setError(error.message)
            })

    }


    //set user name--------------------
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {
                // Profile updated!
                // ...
            }).catch((error) => {
                setError(error)
                // ...
            });
    }

    return (
        <div className="register-container py-20">

            <h1 className=" text-pink-500 text-center"><i className="fas fa-tooth"></i> Pro Dental Care</h1>
            <h5 className='text-center text-white'>Register page</h5>


            <div className='d-flex justify-center container text-green-400 fw-bold'>
                <div >

                    <Form onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control required onBlur={nameChange} type="name" placeholder="Enter name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onBlur={emailChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                <p className="text-red-500">{error}</p>
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required onBlur={passwordChange} type="password" placeholder="Password" />
                        </Form.Group>

                        <button style={{ width: '340px' }} className='btn btn-warning ' type="submit">
                            Submit
                        </button>
                    </Form>
                    <div className="mt-5">
                        <NavLink to="/login" className='text-decoration-none text-indigo-50'><h5>Already Registered? <span className='text-pink-500'>Please Login</span></h5></NavLink>
                    </div>
                </div>

            </div><br />
            <div className='text-center'>
                <p className='  text-pink-600'>-------------or------------</p>
                <button style={{ width: '340px' }} className='btn btn-primary' onClick={signInUsingGoogle}>Google Login</button>
            </div>
        </div>
    );
};

export default Register;