import React from 'react'

const LoopEx = () => {

    const arr = [
        {pno: 1, name:"USER1"},
        {pno: 2, name:"USER2"},
        {pno: 3, name:"USER3"},
        {pno: 4, name:"USER4"},
        {pno: 5, name:"USER5"}
    ]

const lis = arr.map(obj => <li key={obj.pno}> {obj.name} </li>)

    return (
        <ul>
            {lis}
        </ul>
    )
}

export default LoopEx

