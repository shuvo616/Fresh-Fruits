import React from 'react';
import { Link } from 'react-router-dom';
import './SideAdmin.css'

const SideAdmin = () => {
    return (
        <div className="leftSide">
            <ul>
                <li><Link className="navComponent" to="/">Home</Link></li>
                <li><Link className="navComponent" to="/addProduct">Add Product</Link></li>
                <li><Link className="navComponent" to="/manageProduct">Manage Product</Link></li>
            </ul>
        </div>
    );
};

export default SideAdmin;