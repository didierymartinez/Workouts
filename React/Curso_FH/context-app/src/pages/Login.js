import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export const Login = () => {

    
    const context = useContext(UserContext)

    const handleClick = () =>{
        context.setUser({name: "Didier", lastName: "Martinez", age: 37});
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={handleClick}>Loggin</button>
        </div>
    )
}
