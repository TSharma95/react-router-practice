import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'
// import { Link } from 'react-router-dom'

const Navbar = () => {

    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }

    const auth = useAuth();

    return (
        <nav className='primary-nav'>
            {/* <Link to='/'>Home</Link>
            <Link to='/about'>About</Link> */}

            {/* d/w Link and NavLink is that later provide auto class to a tag i.e. class=active which can be used to style the active link on the website from index.css
            we can either provide css to the element through css or js method as shown here */}

            {/* navlink provide isActive boolean flag itself which can be used effectively */}

            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
            <NavLink style={navLinkStyles} to='/about'>About</NavLink>
            <NavLink style={navLinkStyles} to='/products'>Products</NavLink>
            <NavLink style={navLinkStyles} to='/users'>Users</NavLink>
            <NavLink style={navLinkStyles} to='/profile'>Profile</NavLink>
            {
                !auth.user && (
                    <NavLink style={navLinkStyles} to='/login'>Login</NavLink>
                )
            }
        </nav>
    )
}

export default Navbar
