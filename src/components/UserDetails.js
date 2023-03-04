import React from 'react'
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const { userId } = useParams();
    // const params = useParams();

    return (
        <div>
            Details about user {userId}
            {/* Details about user {params.userId} */}
        </div>
    )
}

export default UserDetails
