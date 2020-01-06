import React from 'react'

const CountButton = ({label,wrapper,amount}) => {

    console.log("amount: " + amount)

    return (
        <div>
             <button onClick={() => {wrapper(amount)}}>{label}</button>
        </div>
    )
}
export default CountButton