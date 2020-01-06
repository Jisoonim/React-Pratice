import React, {useState} from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'

const ItemComponent = () => {

    const arr = [
        {pno: 1, pname: "01", price: 3000, amount: 0},
        {pno: 2, pname: "02", price: 4000, amount: 0},
        {pno: 3, pname: "03", price: 5000, amount: 0},
        {pno: 4, pname: "04", price: 6000, amount: 0},
        {pno: 5, pname: "05", price: 7000, amount: 0},

    ]

    const changeItem = (pno, amount) => {
        console.log("changeItem.....", pno, amount)
        const target = items.filter(item => item.pno === pno)[0]
        console.log(target)
         target.amount = parseInt(amount)
         console.log(items)

         let sum = 0;
         items.forEach(item => {
             sum += item.price * item.amount
         })
         setTotal(sum)
    }

    const [total, setTotal] = useState(0) //물건 값 총합

    const [items, setItems] = useState(arr)

    return (
        <div>
            <h1>Item Component</h1>
            <ItemList arr = {items} changeItem = {changeItem}></ItemList>
            <hr></hr>
            <ItemTotal total = {total}></ItemTotal>

        </div>
    )
}

export default ItemComponent