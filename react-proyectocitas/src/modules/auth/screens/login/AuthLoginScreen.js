import React from 'react'
import LoginFooter from './components/LoginFooter'
import LoginForm from './components/LoginForm'
import LoginHeader from './components/LoginHeader'
import '../../../../styles/form.css'


const AuthLoginScreen = (props) => {
    console.log(props);
    const goLoginScreen = () => {
        props.history.push("/login")
    }
    

    return (    
        
        <>
            <main className="main">
                <LoginHeader />
                <LoginForm/>
            </main>


            <LoginFooter/>
        </>   
        
    )
}

export default AuthLoginScreen
