import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './OrderList.css'

const OrderList = () => {

    const [orderList , setOrderList] = useState([]);
    const [loggedInUser, setLoggedInUser]  =  useContext(UserContext);

    useEffect(()=>{
        fetch('https://young-falls-48033.herokuapp.com/orderProductListInfo?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data =>setOrderList(data))
    },[])
     console.log(orderList)
    return (
        <div className="container">
            <h5 className="mt-5 text-center">Hello, {loggedInUser.name},You have order: {orderList.length} Items </h5>
            <div className="row">
                <div className="col-md-3 col-sm-12"></div>
                <div className="col-md-6 col-sm-12">
                <div className="order mt-5 mb-5">
                    <table>
                        <tr>
                            <td className="textBold">Product Name</td>
                            <td className="textBold">Date</td>
                            <td className="textBold">Time</td>
                        </tr>
                        {
                            orderList.map(list =><tr>
                                <td> <p>{list.productName}</p> </td>
                                <td> <p>{(new Date(list.date).toDateString('dd/MM/yyyy'))}</p> </td>
                                <td> <p>{list.time}</p> </td>
                            </tr> )
                        }
                    </table>
                </div>
                </div>
                <div className="col-md-3 col-sm-12"></div>
            </div>
        </div>
    );
};

export default OrderList;