import React from 'react'

export const SimpleLayout = ({children, width, heigth, mainclass, classes}) => {
    return (
        <div className={`flex h-screen justify-center items-center ${mainclass}`}>
            <main className={`${classes}`}>
                {children}
            </main>
        </div>
    )
}
