import React, { useEffect, useRef, useState } from "react";

function Question({ questions }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [selectedAnswerTag, setSelectedAnswerTag] = useState(null);
  const [previousSelectedAnswerTag, setPreviousSelectedAnswerTag] =
    useState(null);

  const handleAnswerClicked = (e, answer) => {
    setIsDisabled(false);
    if (previousSelectedAnswerTag) {
      previousSelectedAnswerTag.style.border = "none";
    }
    setSelectedAnswer(answer);
    setSelectedAnswerTag(e.target);
    e.target.style.border = ".2rem solid white";
    setPreviousSelectedAnswerTag(e.target);
  };

  const handleSubmit = () => {
    const btns = document.querySelectorAll(".opt-btn");
    let correctBtn;
    btns.forEach((btn) => {
      if (btn.dataset.answer == "true") correctBtn = btn;
    });
    if (selectedAnswer) {
      selectedAnswerTag.classList.add("correct");
    } else {
      selectedAnswerTag.classList.add("incorrect");
      correctBtn.classList.add("correct");
    }
  };

  return (
    <div className='question-container'>
      <div className='question-section'>
        <div className='question-text'>{questions[0].questionText}</div>
      </div>
      <div className='answer-section'>
        {questions[0].answerOptions.map((answerOption, index) => (
          <button
            className='opt-btn'
            data-answer={answerOption.isCorrect}
            onClick={(e) => handleAnswerClicked(e, answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
      <div>
        <button
          className={`submit-btn ${isDisabled && "disabled"}`}
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Question;
