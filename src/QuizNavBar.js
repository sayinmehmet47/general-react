import React, { useState } from 'react';
import ReactDOM from 'react-dom';



function QuizNavBar({questions}) {
 
 
    const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
 const goBack = () =>
    setQuestionIndex(questionIndex-1);
  // determine if on the first question or not 
const goToNext = () =>
    setQuestionIndex(questionIndex+1);
    
  const onLastQuestion = questionIndex === questions.length - 1;
  const onFirstQuestion=questionIndex===0

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button onClick={goBack} disabled={onFirstQuestion}
 >
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}


export default QuizNavBar;
