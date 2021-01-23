import React from 'react'

const HomeScreen = (props) => {
    const goLogin = () => {
        props.history.push("/login")
    }

    return (
        <div>
            <button onClick={goLogin}>Login</button>
        </div>
    )
}

export default HomeScreen
