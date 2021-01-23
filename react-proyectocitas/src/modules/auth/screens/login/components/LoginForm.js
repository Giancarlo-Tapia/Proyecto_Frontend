import React from 'react'

import ButtonSubmit from './ButtonSubmit'
import IngresarConFacebookBtn from './IngresarConFacebookBtn'
import IngresarConGoogleBtn from './IngresarConGoogleBtn'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'

const LoginForm = () => {
    return (
        <>
        <section className="form__wrapper">
                    <h2 className="form__title">Bienvenido</h2>
        <form className="form">
                    <IngresarConGoogleBtn/>
                    <IngresarConFacebookBtn/>

                    <p className="form__text">o ingresa con tus datos de sesión</p>
                
                    <InputEmail/>
                    <InputPassword/>    
                    
                    
                    
                
                    <ButtonSubmit/>
                    

                    <div className="form__links">
                        <div className="links__top">
                            <a href="">¿Aún no tienes una cuenta?  </a>   
                            <a href=""><b>Regístrate aquí</b></a>
                            </div>
                            <a href=""><b>Olvidé mi contraseña</b></a>
                    </div>
                        
                    
                </form>
                </section>
                </>
    )
}

export default LoginForm
