import React, {useState, useContext} from "react";
import {Questions} from "src/Helpers/QuestionBank.js"
import {QuizContext} from "./Helpers/Context";

function Quiz(){
    const { score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setQuestion(currQuestion + 1);
    }

    function finishQuiz() {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endScreen")


    }

    return <div className="Quiz">
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className="options">
            <button onClick={() => setOptionChosen("A")}>
                {Questions[currQuestion].optionA}</button>
            <button onClick={() => setOptionChosen("B")}>
                {Questions[currQuestion].optionB}</button>
            <button onClick={() => setOptionChosen("C")}>
                {Questions[currQuestion].optionC}</button>
            <button onClick={() => setOptionChosen("D")}>
                {Questions[currQuestion].optionD}</button>
        </div>
        {currQuestion == Questions.length -1 ? (
            <button onClick={finishQuiz}> Finish Quiz</button>
        ) : (
        <button onClick={nextQuestion}> Next Question </button>
        )}
        </div>
}

export default Quiz;