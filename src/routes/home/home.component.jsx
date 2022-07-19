import React from 'react';
import './home.styles.css';

const Home = () => {
  return (
    <section className="container">
      <div className="container_box">
        <header className="header">
          <span>Welcome to the </span>
          <h1>
            <span className="">Trivia</span>
            <span className=""> Challenge!</span>
          </h1>
        </header>
        <div className="card">
          <div className="text_content">
            <p>
              You will be presented with 10 True or False questions.
              <br />
              <br />
              Can you score 100%?
            </p>
          </div>
          <div className="action_content"></div>
        </div>
        <div className="button_section">
          <button className="button-53" role="button">
            BEGIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
