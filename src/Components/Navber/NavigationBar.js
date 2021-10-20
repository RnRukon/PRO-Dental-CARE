import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';



const NavigationBar = () => {
    const { user, logOut, handleDeleteAccount } = useAuth();

    return (
        <Navbar
            fixed="top" className=" px-10" style={{ backgroundColor: ('rgb(0, 0, 71') }} expand="lg">

            <Navbar.Brand as={NavLink} to='/home'><h4 className=" text-pink-500"><i className="fas fa-tooth text-white"></i> Pro Dental Care</h4></Navbar.Brand>

            <Navbar.Toggle className=" text-info bg-primary" aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <Nav.Link as={NavLink} style={{ fontWeight: "bold", color: 'white' }} activeStyle={{ fontWeight: "bold", color: "red" }} to='/home' >Home</Nav.Link>

                    <Nav.Link as={NavLink} style={{ fontWeight: "bold", color: 'white' }} activeStyle={{ fontWeight: "bold", color: "red" }} to="/services" >Services</Nav.Link>

                    <Nav.Link as={NavLink} style={{ fontWeight: "bold", color: 'white' }} activeStyle={{ fontWeight: "bold", color: "red" }} to="/gallery" >Our Gallery</Nav.Link>

                    <Nav.Link as={NavLink} style={{ fontWeight: "bold", color: 'white' }} activeStyle={{ fontWeight: "bold", color: "red" }} to="about"  >About Us</Nav.Link>

                    {user.displayName && <Nav.Link style={{ fontWeight: "bold", color: 'white' }} activeStyle={{ fontWeight: "bold", color: "red" }} >{user.displayName}</Nav.Link>}

                    {!user.email ?

                        <Nav.Link style={{ fontWeight: "bold", color: 'white' }} as={NavLink} activeStyle={{ fontWeight: "bold", color: "red" }} to="/login" >Login</Nav.Link> :

                        <Nav.Link onClick={logOut} style={{ fontWeight: "bold", color: 'white' }} activeStyle={{ fontWeight: "bold", color: "red" }} >Logout</Nav.Link>}

                    {user.email &&
                        <Nav.Link onClick={handleDeleteAccount} style={{ fontWeight: "bold", color: 'white' }} activeStyle={{ fontWeight: "bold", color: "red" }} >Delate account</Nav.Link>
                    }
                    {
                        user.photoURL ? <Nav.Link style={{ height: '45px', width: '45px' }}><img className="rounded-full" src={user.photoURL} alt="" /></Nav.Link> : ""
                    }


                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;