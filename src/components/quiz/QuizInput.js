import React, {useState} from 'react'

const QuizInput = ({fn}) => {

    //const jquery = window.$

    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
        console.log(e.target.value)
    }

    const handleClick = () => {
        console.log("click")

      //  console.log(jquery("#uInput"))

        fn(text)
        setText('') //작성한것 초기화 
    }

    return (
        <div>
            <input id="uInput" type='text' onChange={handleChange} value={text}></input>
            <button onClick={handleClick}>제출</button>
        </div>

    )
}

export default QuizInput