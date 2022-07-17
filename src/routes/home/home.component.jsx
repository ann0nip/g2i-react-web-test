import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="header">Welcome to the Trivia Challenge!</div>
      <div className="card">
        <div className="primary_content">
          You will be presented with 10 True or False questions.
        </div>
        <div className="secondary_content">Can you score 100%?</div>
      </div>
      <div className="button">BEGIN</div>
    </div>
  );
};

export default Home;
