import React from 'react';
import './App.css';
import CountHookComponent from './components/day1/CountHookComponent';
import QuizComponent from './components/quiz/QuizComponent';
import logo from './logo.svg';
import LoopEx from './components/day03/LoopEx';
import ItemComponent from './components/day03/ItemComponent';
import SWTest from './components/day03/SWTest';


function App() {

  const arr1 = [  
    {title:"손흥민이 잉글랜드 프리미어리그에서 소속한 팀 이름은?", answer:"토트넘" },
    {title:"레드벨벳 소속 가수가 아닌사람은?(ex.예리 / 아이린 / 슬기 / 조이 / 유정", answer:"유정" },
    {title:"2020년은 경자년이다. 12간지 중 해당하는 동물은? ", answer:"쥐" },
    {title:"조선의 몇년도에 설립되었나?", answer:"1392년" },
    {title:"프로그래밍 언어가 아닌 것을 고르시오.(ex.Java / Tomcat / React / Ruby / python ", answer:"Tomcat" }, 
 ]

    const arr2 = [  
      {title:"ZZQuiz1...", answer:"1" },
      {title:"ZZQuiz2...", answer:"2" },
      {title:"ZZQuiz3...", answer:"3" },
      {title:"ZZQuiz4...", answer:"4" },
      {title:"ZZQuiz5...", answer:"5" }, 
    ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <SWTest></SWTest>

        <ItemComponent></ItemComponent>

        <LoopEx></LoopEx>




        {/* <QuizComponent arr={arr1}></QuizComponent> //퀴즈문제출력


        <CountHookComponent></CountHookComponent>*/}
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

