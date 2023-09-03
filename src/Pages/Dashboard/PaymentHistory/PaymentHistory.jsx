import { useEffect } from "react";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {
    const { user } = useAuth();
    const [payment, setPayment] = useState([]);
    useEffect(() => {
        fetch('https://el-carino-bistro-server.vercel.app/payments')
        .then(res => res.json())
        .then(data => {
            setPayment(data);
        })
    },[])
    return (
        <div>
             <Helmet>
                <title>el Cariño Bistro | Payment History</title>
            </Helmet>
            <h1 className="p-10 text-center text-3xl">Payment History of {user.displayName}</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Quantity</th>
                                <th>Price($)</th>
                                <th>Items</th>
                                <th>Transaction ID</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            payment.map((item, index) =>
                             <>
                                {
                                    item.email == user.email ? 
                                    <tr>
                                        <td>{index }</td>
                                        <td className="">{item.date}</td>
                                        <td className="">{item.quantity}</td>
                                        <td className="">${item.price}</td>
                                        <td>{item.itemNames.map(itemName =>
                                        <li key={item._id}>{itemName}</li>
                                        )}</td>
                                    <td>{item.transactionId}</td>
                                    </tr>
                                    
                                    : <></>
                                    
                                }

                                

                            </>)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;