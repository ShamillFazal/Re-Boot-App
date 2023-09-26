import React from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import MDN from "../../images/MDN_Web_Docs_logo.svg.png";
import W3 from "../../images/W3Schools_logo.png";

function VariablesPage() {
  return (
    <div>
      <NavBar />
      <section className="section is-medium">
        <div className="container">
          <div className="content has-text-centered">
            <h1 className="is-size-2" id="main-page-heading">
              Variables in JS
            </h1>
          </div>
          <div className="content">
            <p>
              Welcome to our JavaScript Variables Resource Page! Variables are
              essential elements in JavaScript, playing a pivotal role in
              storing, manipulating, and managing data within your programs. In
              JavaScript, variables serve as containers for values, allowing you
              to work with different types of information efficiently.
            </p>
            <p>
              Just like functions, understanding how to use variables
              effectively is fundamental to writing clean and maintainable code.
              By properly defining and utilizing variables, you can make your
              code more organized, flexible, and easier to debug.
            </p>
            <p>
              {" "}
              We're delighted to offer you a variety of valuable resources to
              explore the world of JavaScript variables. Below, you'll find a
              curated collection of links to official documentation and
              enlightening video tutorials. Whether you're new to programming or
              an experienced developer, these resources are designed to enrich
              your knowledge of JavaScript variables.
            </p>
            <p>
              Learn how to declare, assign, and manipulate variables, discover
              best practices for variable naming, and explore advanced
              techniques for working with data in your JavaScript projects. Dive
              into these resources to enhance your understanding of JavaScript
              variables and empower your coding endeavors.
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
                  href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MDN} alt="" />
                </a>
              </figure>
              <div className="card-content">
                <p className="subtitle is-6">MDN WEB DOCS</p>
                <p className="title is-4">JS Variables Documentation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card h-100">
            <div className="card-image">
              <figure className="image">
                <a
                  href="https://www.w3schools.com/js/js_variables.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="w3schools" src={W3} alt="" />
                </a>
              </figure>
              <div className="card-content">
                <p className="subtitle is-6">W3 SCHOOLS DOCS</p>
                <p className="title is-4">JS Variables Documentation</p>
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
                  src="https://www.youtube.com/embed/9WIJQDvt4Us?si=3EkSK9vOpmNwwGXI"
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
                  src="https://www.youtube.com/embed/TOkU5HxES1o?si=EIyB4rynguTsLZL8"
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
                  src="https://www.youtube.com/embed/XgSjoHgy3Rk?si=Bj_ZRc-EHV_sDih8"
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

export default VariablesPage;
