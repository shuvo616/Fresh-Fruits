import React, { useContext } from 'react';
import {UserContext} from '../../App'
import AddProduct from '../AddProduct/AddProduct';
import SideAdmin from '../SideAdmin/SideAdmin';
import './Admin.css'

const Admin = () => {
    const [ loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="admin">
            <div className="row">
                <div className="col-md-3 col-sm-12">
                    <SideAdmin></SideAdmin>
                </div>
                <div className="col-md-9 col-sm-12">
                    {
                        loggedInUser.name ? <AddProduct></AddProduct> : <p></p>
                    }

                </div>
            </div>
        </div>
    );
};

export default Admin;