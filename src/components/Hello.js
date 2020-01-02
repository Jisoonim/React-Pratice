import React from 'react'

const Hello = ({name,fn}) => { //brace안써도 되나 쓸경우 return 작성

    // console.log(props)

    // const handleClick = () => {
    //     props.fn(props.name)
    // }

  return (
  <h1 onClick= {() => {fn(name)}} >Hello World Component {name}</h1>
    )

}

export default Hello //export로 닫아줘라.