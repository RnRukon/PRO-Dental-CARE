import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';



const NavigationBar = () => {
    const { user, logOut, handleDeleteAccount } = useAuth();

    return (
        <Navbar className=" px-10 bg-indigo-900" expand="lg">
            <Navbar.Brand to='/home'><img className='img-fluid w-40' src="http://wethemez.com/wordpress/prident/wp-content/themes/prident/assets/image/logo.png" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link as={NavLink} className=" text-white" to='/home' >Home</Nav.Link>
                    <Nav.Link as={NavLink} className=" text-white" to="/services" >Services</Nav.Link>
                    <Nav.Link as={NavLink} className=" text-white" to="about"  >About Us</Nav.Link>
                    {user.displayName && <Nav.Link className=" text-white" >{user.displayName}</Nav.Link>}

                    {!user.email ? <Nav.Link as={NavLink} className=" text-white" to="/login" >Login</Nav.Link> :
                        <Nav.Link onClick={logOut} className=" text-white" >Logout</Nav.Link>}
                    {user.email && <Nav.Link onClick={handleDeleteAccount} className=" text-white" >Delate account</Nav.Link>}

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;