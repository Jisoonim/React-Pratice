import React, { useState } from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'


const QuizComponent = ({arr}) => {

    const[idx, setIdx] = useState(0)
    const[end, setEnd] = useState(0)   //const가 불변(상수)이므로 let을 사용해서 변수가 변하게 해야함.

    // const arr = [ //문제 제시
    //              {title:"Quiz1...", answer:"1"},
    //              {title:"Quiz2...", answer:"2"},
    //              {title:"Quiz3...", answer:"3"},
    //              {title:"Quiz4...", answer:"4"},
    //              {title:"Quiz5...", answer:"5"},

    //             ]

    const checkAnswer = (userInput) => {
        console.log("checkAnswer")
        if(arr[idx].answer === userInput) {
            if(idx === arr.length - 1) {
                setEnd(1)
                return
            }
            setIdx(idx + 1)
        }else {
            setEnd(-1) //정답일시 +1점,틀리면 -1점
        }
    }

    const comp = () => {

        let result = null; //상수를 쓰면 안될때 let 타입 사용

        if(end == 1) {
            result = <><h1>당신은 퀴즈왕!</h1><img src = "https://img2.quasarzone.co.kr/web/editor/1911/1911obj___552933193.png"></img></>
        }else if(end == -1) {
            result = <><h1>틀렸습니다. 좀 더 공부하세요.</h1><img src = "data:image/jpeg;base64,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"></img></>
        }else {
            result =  <> <QuizBoard title= {arr[idx].title}></QuizBoard> <QuizInput fn={checkAnswer}></QuizInput> </>
        }
        return result;
    }
    return (
        <div>
            {comp()}
        </div>
    )
}

export default QuizComponent