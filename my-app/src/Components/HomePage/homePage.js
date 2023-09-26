import React from "react";
import NavBar from "../NavBar/navBar";
import LogoR from "../../images/V3_Logo.png";
import Typewriter from "typewriter-effect";
import "./homePage.css";
import Footer from "../Footer/footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <section className="section is-medium">
        <div className="container has-text-centered	">
          <img src={LogoR} alt="V3 Logo" className="logo" />
          <div>
            <h1 className="is-size-2" id="main-page-heading">
              Welcome to Re-boot!
            </h1>
          </div>
          <div className="typewriter" id="typedtext">
            <Typewriter
              id="typewriter"
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "You've made it this far bootcamper! Don't give up now."
                  )
                  .pauseFor(1000) // Pause for 1 second after the first line
                  .deleteAll()
                  .typeString(
                    "This app contains a list of resources and quizzes to test everything you've learned so far."
                  )
                  .pauseFor(1000) // Pause for 1 second after the second line
                  .deleteAll()
                  .typeString(
                    "Use these resources to help solidify your knowledge and ensure your success in the bootcamp!"
                  )
                  .callFunction(() => {
                    console.log("All strings were typed and deleted.");
                  })
                  .start();
              }}
            />
          </div>
        </div>
      </section>
        <Footer />
    </>
  );
}

export default HomePage;
