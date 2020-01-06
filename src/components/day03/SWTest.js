import React, {useState , useEffect} from 'react'
import axios from 'axios'

//StarWarsAPI Tests


const SWTest = () => {

    const [name, setName] = useState('AAA')

    useEffect(() => {
        
         axios.get('https://swapi.co/api/people/20/')
        .then((res,error) => {
            console.log(res.data.name)
            setName(res.data.name)
        })

    },[]) //[] : 한번만 호출


    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}
export default SWTest
