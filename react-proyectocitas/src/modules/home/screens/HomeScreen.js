import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AuthLoginScreen from '../../auth/screens/login/AuthLoginScreen';

const HomeScreen = (props) => {
    console.log(props);
        const goLogin = () => {
            props.history.push("/login")
        }

    return (
        <div>
        
            <NavLink className="nav-link" activeClassName="active" exact to="/login">Login</NavLink>
            <NavLink className="nav-link" activeClassName="active" exact to="/register">Register</NavLink>
        </div>
    )
}

export default HomeScreen
