import React from 'react'

export default function items(props) {
    return (
        <>
            <ul className="list">
                <li className="minus">
                    {props.text} <span> ₹{props.amount}</span><button className="delete-btn" onClick={() => {
                        props.onDelete(props.id)
                    }}>x</button>
                </li>
            </ul>
        </>
    )
}
