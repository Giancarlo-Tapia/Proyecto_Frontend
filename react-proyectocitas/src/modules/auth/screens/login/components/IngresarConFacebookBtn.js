import React from "react";
import logo from '../../../../../assets/img/facebook-sign-icon.png'

const IngresarConFacebookBtn = () => {
  return (
    <a className="btn-style facebook">
      <figure className="icon__sign">
        <img src={logo} width="12" alt="" />
      </figure>
      Ingresa con Facebook
    </a>
  );
};

export default IngresarConFacebookBtn;
