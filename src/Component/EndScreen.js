import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import {Questions} from "../Helpers/QuestionBank";


export default function EndScreen() {
    const { score, setScore } = useContext(QuizContext)
    const restartQuiz = () => {
    setScore(0)
    // Go back to the main menu
    }
    return <div className="EndScreen">
        {" "}
        <h1> Quiz finished </h1>
        <h3> {score} / {Questions.length}{""}</h3>
        <button onClick={restartQuiz}> Restart Quiz</button>

    </div>

}