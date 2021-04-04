import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'

const ProductList = (props) => {
    const { name, price, imageURL, _id } = props.product;
    return (
        <div className="col-md-4 col-sm-12 mb-5">
            <div className="productInfo">
                <img src={imageURL} alt="" />
                <h4>{name}</h4>
                <div className="caption d-flex justify-content-between ">
                    <p>${price}</p>
                    <Link to={`/orderProduct/${_id}`}>
                        <button className="btn btn-success">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductList;