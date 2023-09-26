import React, { useState } from "react";
import functionsQuizData from "../../Data/functions_questions.json";
export default function QuizF({ quizName }) {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < functionsQuizData.length) {
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
            You Scored {score} out of {functionsQuizData.length}
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
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {functionsQuizData.length}
              </div>
              <h2> {quizName}</h2>
              <div className="question-text">
                {" "}
                {functionsQuizData[currentQuestion].questionText}
              </div>

              {functionsQuizData[currentQuestion].codeSnippet && (
                <div>{functionsQuizData[currentQuestion].codeSnippet}</div>
              )}
            </div>

            <div className="answer-section">
              {functionsQuizData[currentQuestion].optionText.map(
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



