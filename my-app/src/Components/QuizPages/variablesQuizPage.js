
import Quiz from "../Quizzes/variablesQuiz";
import variablesQuizData from "../../Data/variables_questions.json";
import React from "react";
import { useState } from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";

function VariablesQuizPage() {

  
  const [quizData, setQuizData] = useState(variablesQuizData);
  const [quizName, setQuizName] = useState("Variables Quiz");

  

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

export default VariablesQuizPage;