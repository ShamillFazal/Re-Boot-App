import React from "react";
import Quiz from "../Quizzes/arraysQuiz";
import arraysQuizData from "../../Data/arrays_questions.json";
import { useState } from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";

function ArraysQuizPage() {
  const quizData = useState(arraysQuizData);
  const quizName = useState("Arrays Quiz");

  return (
    <>
      <NavBar />
      <section className="section is-large is-primary">
        <div className="container">
          <div className="columns is-centered">
          <div className="column is-half">
            <div className="card p-4">
              <div className="quiz">
                <quizQuestions className="Quiz">
                  <Quiz quizData={quizData} quizName={quizName} />
                </quizQuestions>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ArraysQuizPage;
