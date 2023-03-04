import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                Order Confirmed !!
            </div>
            <button onClick={() => navigate('/')}>Back to Home Page</button>
        </>

    )
}

export default OrderSummary
