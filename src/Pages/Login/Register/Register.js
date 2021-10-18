import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../Components/Hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../../../Components/FireBase/Firebase.init';


initializeAuthentication()

const Register = () => {
    const auth = getAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { signInUsingGoogle, setError, error } = useAuth();



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
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password most contain 2 uppercase');
            return;
        }

        registerNewUser(email, password);
        e.target.reset();

    } //register---------------------
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result => {
                const user = result.user;
                console.log(user)
                setUserName();
                setError('');
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
        <div>
            <h1>Register page</h1>


            <div className='d-flex justify-center container'>
                <div >

                    <Form onSubmit={handleRegistration}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control onBlur={nameChange} type="name" placeholder="Enter name" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={emailChange} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                <p className="text-red-500">{error}</p>
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
                <div>
                    <button onClick={signInUsingGoogle}>Google Login</button>
                </div>
            </div>
        </div>
    );
};

export default Register;