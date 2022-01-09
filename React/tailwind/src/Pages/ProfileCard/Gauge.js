import React from 'react'

export const Gauge = ({quantity, text}) => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-bold text-lg">{quantity}</h1>
            <h1 className="text-xs text-gray-400 font-light tracking-widest">{text}</h1>
        </div>
    )
}
