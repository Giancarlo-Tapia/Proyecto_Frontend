import { URL_BACKEND } from "./../environments/environments";

export const getUsuarios = async () => {
    const peticion = await fetch(`${URL_BACKEND}/users`);
    const data = await peticion.json();
    return data;
}

export const postUsuario = async (objUsuario) => {
    const peticion = await fetch(`${URL_BACKEND}/users`, {
        method: "POST",
        body: JSON.stringify(objUsuario),
        headers: {
            "Content-type": "application/json"
        }
    } );
    const data = await peticion.json();
    return data;
}

export const putUsuario = async (objUsuario) => {
    const peticion = await fetch(`${URL_BACKEND}/user/${objUsuario.prod_id}`, {
        method: "PUT",
        body: JSON.stringify(objUsuario),
        headers: {
            "Content-type": "application/json"
        } 
    });
    const data = await peticion.json();
    return data;
}
