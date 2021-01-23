import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ClientePrivate = ( { path, component: Component }) => {
    
    const pasar = false;

    return (
        pasar ?
        <Route path={path} component={Component} /> :
        <Redirect to="/" />

    )
}

export default ClientePrivate
