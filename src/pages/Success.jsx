import React from "react";
import {PropagateLoader} from "react-spinners";
import { useEffect, useState } from "react";

const Success = () => {
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);     // Simulate a 3-second loading time
    }, []); // Empty dependency array to run only once on mount
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            {loading ? (
            <PropagateLoader color="#36d7b7" />
            ) : (
            <div>
            <h2 className="text-3xl font-semibold mb-4 text-center">Order Successful!</h2>
            <p>Your order has been successfully placed</p>
            </div>
            )}
        </div>
        );
}
export default Success;