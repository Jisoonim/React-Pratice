import React from 'react'
import ItemDetails from './ItemDetails'

const ItemList = ({arr, changeItem}) => {

    const lis = arr.map(item  => <li key={item.pno}> <ItemDetails pno = {item.pno} pname = {item.pname} price = {item.price} amount = {item.amount} changeItem = {changeItem} /> </li> )

    return (
        <ul>
            {lis}
        </ul>
    )
}

export default ItemList