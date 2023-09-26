import React, { useState } from "react";
import variablesQuizData from "../../Data/variables_questions.json";
import "./quizPage.css";

export default function Quiz({ quizName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < variablesQuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <div className="quiz">
        {showScore ? (
          <div className="score-section">
            {" "}
            You Scored {score} out of {variablesQuizData.length}
            <button
              onClick={() => {
                setShowScore(false);
                setScore(0);
                setCurrentQuestion(0);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="question-section">
              <h2> {quizName}</h2>
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {variablesQuizData.length}
              </div>
              <div className="question-text">
                {" "}
                {variablesQuizData[currentQuestion].questionText}
              </div>

              {variablesQuizData[currentQuestion].codeSnippet && (
                <div>{variablesQuizData[currentQuestion].codeSnippet}</div>
              )}
            </div>

            <div className="answer-section">
              {variablesQuizData[currentQuestion].optionText.map(
                (answerOption) => (
                  <button
                    className="answer-button"
                    onClick={() =>
                      handleAnswerButtonClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
