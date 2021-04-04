import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div className="container-fluid ">
                 <Link className="brand" to="/">Fresh Fruit</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav  ">
                            <Link className="navComponent" to="/home">Home</Link>
                            <Link className="navComponent" to="/order">Order</Link>
                            <Link className="navComponent" to="/addProduct">Admin</Link>
                            <Link to="/Login" >
                                {
                                    loggedInUser.name ? <h4 className="userName">{loggedInUser.name}</h4> : <button className="btn btn-success">Login</button>
                                }
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;