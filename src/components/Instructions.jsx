import React from "react";

function Instructions({
  setLoader,
  setDisplayInstructions,
  setDisplayQuestion,
}) {
  const fetchQuestions = () => {
    setDisplayInstructions(false);
    setLoader(true);
    // api call is made here
    setTimeout(() => {
      setLoader(false);
      setDisplayQuestion(true);
    }, 2000);
  };
  return (
    <div className='instruction-box'>
      <ul>
        <li>The quiz wll consists of 5 questions</li>
        <li>Each correct answer will give you 1 point</li>
        <li>There is no negative marking applicable</li>
        <li>The answer will be validated once the submit button is clicked</li>
      </ul>
      <div>
        <button className='btn start-btn' onClick={fetchQuestions}>
          Start Test
        </button>
      </div>
    </div>
  );
}

export default Instructions;
