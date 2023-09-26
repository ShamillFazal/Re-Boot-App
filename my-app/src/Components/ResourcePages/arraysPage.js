import React from "react";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/footer";
import MDN from "../../images/MDN_Web_Docs_logo.svg.png";
import W3 from "../../images/W3Schools_logo.png";

function ArraysPage() {
  return (
    <div>
      <NavBar />
      <section className="section is-medium">
        <div className="container">
          <div className="content has-text-centered">
            <h1 className="is-size-2" id="main-page-heading">
              Arrays in JS
            </h1>
          </div>
          <div className="content">
            <p>
              Welcome to our JavaScript Arrays Resource Page! Arrays are a
              fundamental data structure in JavaScript, serving as versatile
              containers for storing and organizing collections of values.
              Whether you're working with a list of numbers, strings, objects,
              or a combination of data types, arrays provide a powerful means to
              manage and manipulate data efficiently.
            </p>
            <p>
              In JavaScript, arrays are pivotal to many programming tasks, from
              simple data storage to complex algorithms and data processing.
              Understanding how to work with arrays effectively is essential for
              building robust and flexible applications.
            </p>
            <p>
              {" "}
              We're excited to provide you with a wealth of resources to help
              you explore the world of JavaScript arrays. Below, you'll discover
              carefully curated links to official documentation and engaging
              video tutorials. Whether you're a beginner or an experienced
              developer, these resources are designed to deepen your
              understanding of JavaScript arrays.
            </p>
            <p>
              Learn how to create arrays, access and modify their elements,
              perform common operations like sorting and filtering, and explore
              advanced array methods that can simplify your coding tasks. Dive
              into these resources to enhance your proficiency in JavaScript
              arrays and unlock new possibilities for your programming projects.
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
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={MDN} alt="" />
                </a>
              </figure>
              <div className="card-content">
                <p className="subtitle is-6">MDN WEB DOCS</p>
                <p className="title is-4">JS Arrays Documentation</p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-one-third">
          <div className="card h-100">
            <div className="card-image">
              <figure className="image">
                <a
                  href="https://www.w3schools.com/js/js_arrays.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="w3schools" src={W3} alt="" />
                </a>
              </figure>
              <div className="card-content">
                <p className="subtitle is-6">W3 SCHOOLS DOCS</p>
                <p className="title is-4">JS Arrays Documentation</p>
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
                  src="https://www.youtube.com/embed/7W4pQQ20nJg?si=Pb6cIShzDG2znt2e"
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
                  src="https://www.youtube.com/embed/R8rmfD9Y5-c?si=6gZj-cucKVNPVrG4"
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
                  src="https://www.youtube.com/embed/oigfaZ5ApsM?si=z2kY3YfCZAUMNmjt"
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

export default ArraysPage;
