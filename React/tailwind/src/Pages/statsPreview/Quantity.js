import React from 'react'

export const Quantity = ({ quantity, text}) => {
    return (
        <div>
            <div className="text-2xl font-bold">{quantity}</div>
            <div className="uppercase text-gray-500 tracking-wider">{text}</div>
        </div>
    )
}
