import React, { useState} from "react";
import logoFacebook from "../../../../../assets/img/facebook-sign-icon.png";
import logoGoogle from "../../../../../assets/img/google-sign-icon.jpg";
import { getUsuarios } from "../../../../../servicios/clienteService"
import { Link, NavLink } from 'react-router-dom'

const formularioVacio = {
    email: "",
    password: "",
}

const LoginForm = (props) => {
    console.log(props);

    const [formulario, setFormulario] = useState({...formularioVacio})

    const handleChange = e => {
        setFormulario({
            ...formulario, 
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        
        //Consumir servicio
            getUsuarios().then(data => {
                data.map(user=>{
                    if (user.email === formulario.email && user.password === formulario.password) {
                        console.log("Usuario verificado");
                        setFormulario(formularioVacio);
                        alert("Usuario Correcto");


                    }else {
                        alert("Usuario incorrecto");
                    }

                })
            })

    }


  


  return (
    <>
      <section className="form__wrapper">
        <h2 className="form__title">Bienvenido</h2>


        <form className="form" onSubmit={submit}>
          <a className="btn-style google">
            <figure className="icon__sign">
              <img src={logoGoogle} alt="" width="20" />
            </figure>
            <span>Ingresa con Google</span>
          </a>
          <a className="btn-style facebook">
            <figure className="icon__sign">
              <img src={logoFacebook} width="12" alt="" />
            </figure>
            Ingresa con Facebook
          </a>

          <p className="form__text">o ingresa con tus datos de sesión</p>

          <input
            name="email"
            value={formulario.email}
            onChange={handleChange}
            type="email"
            className="form__input"
            placeholder="Correo electrónico"
          />
          <input
            name="password"
            value={formulario.password}
            onChange={handleChange}
            type="password"
            className="form__input"
            placeholder="Contraseña"
          />

          <button type="submit" className="btn-submit">
            Iniciar Sesión
          </button>

          <div className="form__links">
            <div className="links__top">
              <p>¿Aún no tienes una cuenta? </p>
              <Link className="nav-link h6" activeClassName="active" exact to="/register">Registrate aquí</Link>
            </div>
            <a href="">
              <b>Olvidé mi contraseña</b>
            </a>
          </div>
        </form>


      </section>
    </>
  );
};

export default LoginForm;
