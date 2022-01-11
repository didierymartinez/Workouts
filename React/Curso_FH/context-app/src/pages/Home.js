import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


export const Home = () => {
    const context = useContext(UserContext);


    return (
        <div>
            Home 
            {context.user.name}
        </div>
    )
}
