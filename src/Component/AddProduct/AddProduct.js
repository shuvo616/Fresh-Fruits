import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import SideAdmin from '../SideAdmin/SideAdmin';
import './AddProduct.css'


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageUrl] = useState(null);
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        console.log(productData)
        const url = `https://young-falls-48033.herokuapp.com/addProduct`
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(productData)
           
        })
        .then(res => console.log(res))
        .then(result => {
            alert('Product Upload Successful')
        })
    }


    const handelImageSubmit = e => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '6340c11d124e3fff331d632169fcb874');
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                console.log(response.data.data.display_url)
                setImageUrl(response.data.data.display_url)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <SideAdmin></SideAdmin>
            </div>
            <div className="col-md-6 col-sm-12">
                <h4 className="mb-3 mt-3 ml-5 text-success">Add Fruits Item</h4>
                <div className="rightSide ml-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-success">Fruit Name</p>
                        <input name="name" defaultValue="" ref={register({ required: true })} />
                        <br />
                        <p className="text-success">Fruit Price</p>
                        <input name="price" defaultValue="" ref={register({ required: true })} />
                        <br />
                        <p className="text-success">Fruit Image</p>
                        <input name="exampleRequired" type="file" onChange={handelImageSubmit} />
                        <br/>
                        <input className="mt-3 btn btn-success" type="submit" value="Add Fruit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;