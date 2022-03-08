import React from 'react';

export default function Landing({ toggleMode }) {
  return (
    <div className="view-container landing">
      <div className="landing__banner">
        <div className="landing__banner__main">
          <h1 className="landing__banner__main__title">
            Travelling Expenses app
          </h1>
          <hr className="landing__banner__main__ruler"/>
          <h3 className="landing__banner__main__title landing__banner__main__title--description">
            Expense breakdown for parties, and more..
          </h3>
        </div>
        </div>
      <div className="button button--landing" onClick={() => toggleMode("workView")}>
        START
      </div>
    </div>
  );
};