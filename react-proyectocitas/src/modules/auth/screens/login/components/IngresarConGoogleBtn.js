import React from "react";

import logo from "../../../../../assets/img/google-sign-icon.jpg";

const IngresarConGoogleBtn = () => {
  return (
    <a className="btn-style google">
      <figure className="icon__sign">
        <img src={logo} alt="" width="20" />
      </figure>
      <span>Ingresa con Google</span>
    </a>
  );
};

export default IngresarConGoogleBtn;
