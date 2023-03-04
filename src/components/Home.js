import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <div>
                Home page
            </div>
            <button onClick={() => navigate('order-summary')}>Place Order</button>
            {/* <button onClick={() => navigate('order-summary', { replace: true })}>Place Order</button> */}

            {/* REPLACE: TRUE is used to change history stack it is optional */}
        </>

    )
}

export default Home
