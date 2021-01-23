import React from 'react'
import LoginFooter from './components/LoginFooter'
import LoginForm from './components/LoginForm'
import {Switch, Route}  from 'react-router-dom'
import LoginHeader from './components/LoginHeader'
import './form.css'


const AuthLoginScreen = () => {
    

    return (    
        <body>
            <main className="main">
                <LoginHeader />
                <LoginForm/>
            </main>


            <LoginFooter/>
        </body>   
        
    )
}

export default AuthLoginScreen
