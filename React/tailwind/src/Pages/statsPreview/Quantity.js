import React from 'react'

export const Quantity = ({ quantity, text}) => {
    return (
        <div>
            <div className="text-xl font-bold">{quantity}</div>
            <div className="uppercase text-xs text-gray-500 tracking-wider">{text}</div>
        </div>
    )
}
