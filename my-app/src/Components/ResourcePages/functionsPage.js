import React from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import MDN from "../../images/MDN_Web_Docs_logo.svg.png";
import W3 from "../../images/W3Schools_logo.png";

function FunctionsPage() {
  return (
    <div>
      <NavBar />
      <section className="section is-medium">
        <div className="container">
          <div className="content has-text-centered">
            <h1 className="is-size-2" id="main-page-heading">
              Functions in JS
            </h1>
          </div>
          <div className="content">
            <p>
              Welcome to our JavaScript Functions Resource Page! Functions are
              fundamental building blocks in JavaScript, serving as powerful
              tools for creating reusable, organized code. In JavaScript, a
              function resembles a procedure: a set of statements designed to
              perform specific tasks or calculate values. However, for a
              procedure to qualify as a function, it must take input parameters
              and return an output. This output should establish a clear
              relationship between the input and the result.
            </p>
            <p>
              To harness the power of functions, you'll need to define them
              within the scope where you intend to use them. This allows you to
              call and execute the function whenever needed, promoting code
              reusability and maintainability.
            </p>
            <p>
              {" "}
              We're excited to provide you with an array of valuable resources
              to help you dive deeper into JavaScript functions. Below, you'll
              find carefully curated links to official documentation and
              informative YouTube videos, making your learning journey more
              comprehensive and engaging. Whether you're a beginner or an
              experienced developer, these resources are sure to enhance your
              understanding of JavaScript functions.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="content has-text-centered">
          <h1 className="is-size-2" id="main-page-heading">
            Documentation
          </h1>
        </div>
      </div>

      <div className="columns is-centered">
        <div className="column is-one-third">
          <div className="card h-100">
            <div className="card-image">
              <figure className="image">
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MDN} alt="" />
                </a>
              </figure>
              <div className="card-content">
                <p className="subtitle is-6">MDN WEB DOCS</p>
                <p className="title is-4">JS Functions Documentation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card h-100">
            <div className="card-image">
              <figure className="image">
                <a
                  href="https://www.w3schools.com/js/js_functions.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="w3schools" src={W3} alt="" />
                </a>
              </figure>
              <div className="card-content">
                <p className="subtitle is-6">W3 SCHOOLS DOCS</p>
                <p className="title is-4">JS Functions Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section is-medium">
        <div className="container">
          <div className="content has-text-centered">
            <h1 className="is-size-2" id="main-page-heading">
              Video Tutorials
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="columns is-centered">
            <div class="column is-one-third">
              <figure className="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FOD408a0EzU?si=xsj6G8K8oBsPCMLY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </figure>
            </div>
            <div class="column">
              <figure className="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/gigtS_5KOqo?si=ffI-8YmiMg9Vw_Se"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </figure>
            </div>
            <div class="column">
              <figure className="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/N8ap4k_1QEQ?si=W-xcy56tZlnxqvIQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FunctionsPage;
