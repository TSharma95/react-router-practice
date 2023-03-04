import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const userList = [{ user: 'User 1', status: true }, { user: 'User 2', status: true }, { user: 'User 3', status: false }];
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUSers = searchParams.get('filter') === 'active';

    return (
        <div>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUSers
                    ?
                    (
                        <>
                            <h2>Showing active users</h2>
                            {userList.map((item, index) => {
                                return item.status && <h2 key={index}><Link to={`${(index + 1)}`}>{item.user}</Link></h2>
                            })}
                        </>
                    )
                    :
                    (
                        <>
                            <h2>Showing all users</h2>
                            {userList.map((item, index) => {
                                return <h2 key={index}><Link to={`${(index + 1)}`}>{item.user}</Link></h2>
                            })}
                        </>
                    )
            }

            <Link to='admin'>Admin</Link>
            <Outlet />

        </div>
    )
}

export default Users
