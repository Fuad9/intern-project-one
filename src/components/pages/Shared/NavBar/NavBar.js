import React, { useContext } from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../App";

const NavBar = () => {
    const [loggedInUser] = useContext(AuthContext);

    return (
        <Navbar expand="lg mx-5">
            <Navbar.Brand>
                <NavLink to="/home">
                    <h3>Home</h3>
                </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink
                        to="/home"
                        className="mr-5 text-dark text-decoration-none"
                        activeStyle={{ borderBottom: "2px solid green" }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/dashboard"
                        className="mr-5 text-dark text-decoration-none"
                        activeStyle={{ borderBottom: "2px solid green" }}
                    >
                        Dashboard
                    </NavLink>
                    {!loggedInUser ? (
                        <Link to="/login">
                            <Button className="btn-brand">Login</Button>
                        </Link>
                    ) : (
                        <p className="text-primary">{loggedInUser.name}</p>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
