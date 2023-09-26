import React, { useState } from "react";
import arraysQuizData from "../../Data/arrays_questions.json";

export default function QuizA({ quizName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < arraysQuizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <div className="quiz">
        {showScore ? (
          <div className="score-section is-size-4 has-text-centered">
          <p className="mb-4">
            {" "}
            You Scored {score} out of {arraysQuizData.length}
            </p>
            <button
            className="button is-medium is-rounded is-link is-hovered is-fullwidth"
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
            <div className="columns">
              <div className="column is-half">
                <h2 className="is-size-3">{quizName}</h2>
                <div className="question-count is-size-4 mb-4">
                  <span>Question {currentQuestion + 1}</span>/
                  {arraysQuizData.length}
                </div>
                <div className="question-text is-size-5">
                  {" "}
                  {arraysQuizData[currentQuestion].questionText}
                </div>

                {arraysQuizData[currentQuestion].codeSnippet && (
                  <div>{arraysQuizData[currentQuestion].codeSnippet}</div>
                )}
              </div>

              <div className="column">
                <div className="answer-options">
                  {arraysQuizData[currentQuestion].optionText.map(
                    (answerOption, index) => (
                      <div key={index} className="answer-option">
                        <button
                          className="button is-medium is-rounded is-link is-hovered is-fullwidth"
                          onClick={() =>
                            handleAnswerButtonClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.answerText}
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
