import React, { useState} from "react";
import { postUsuario } from "../../../../../servicios/clienteService"
import { Link, NavLink } from 'react-router-dom'

const formularioVacio = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  phone: ""
}

const RegisterForm = (props) => {
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
            postUsuario(formulario).then(data => {
                  console.log(data);
                  setFormulario(formularioVacio);
                  alert(`Usuario ${data.name} registrado`);
            })

    }


  


  return (
    <>
      <section className="form__wrapper pt-4">
        <h2 className="form__title">Registrate</h2>


        <form className="form" onSubmit={submit}>
      
          <input
            name="name"
            value={formulario.name}
            onChange={handleChange}
            type="text"
            className="form__input"
            placeholder="Nombre"
          />
          <input
            name="lastname"
            value={formulario.lastname}
            onChange={handleChange}
            type="text"
            className="form__input"
            placeholder="Apellido"
          />
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
            placeholder="Password"
          />
          <input
            name="phone"
            value={formulario.phone}
            onChange={handleChange}
            type="text"
            className="form__input"
            placeholder="Número celular"
          />

          <button type="submit" className="btn-submit">
            Register
          </button>

          <div className="form__links">
            <div className="links__top d-flex flex-column">
              <p>¿Ya estás registrado? </p>
              <Link className="nav-link h4" activeClassName="active" exact to="/login">Inicia sesión</Link>
              
            </div>
          </div>

        </form>


      </section>
    </>
  );
};

export default RegisterForm;
