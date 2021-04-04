import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import SideAdmin from '../SideAdmin/SideAdmin';
import './MangeProduct.css'

const MangeProduct = () => {
    const [product, setProduct] = useState([]);
    const history = useHistory();
    const location = useLocation();
    
    useEffect(() => {
        fetch('https://young-falls-48033.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [product])

    const deleteProduct = (id) => {

        fetch("https://young-falls-48033.herokuapp.com/deleteProduct/" + id, {
            method: 'DELETE',
        })
        .then(res => res.json())

    }
    return (
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <SideAdmin></SideAdmin>
            </div>
            <div className="col-md-4 col-sm-12">
                <h4 className="mt-2 ml-5 text-success">Product List</h4>
                <div className="deleteProduct mb-5 ml-5">
                    <table>
                        <tr>
                            <td className="textBold"><p>Name</p></td>
                            <td className="textBold"><p>Price</p></td>
                            <td className="textBold"><p>Action</p></td>
                        </tr>
                        {
                            product.map(delProduct => <tr id="removeElement">
                                <td><p>{delProduct.name}</p></td>
                                <td><p>{delProduct.price}</p></td>
                                <td> <button className="btn btn-danger" onClick={() => deleteProduct(delProduct._id)}>Delete</button> </td>
                            </tr>)
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MangeProduct;