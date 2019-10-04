import React from 'react';
import Question from './Question';

const QuestionList = ({ questions, handleAnswerClick, handleEnterPress }) => {
  return (
    <ul className="question-list">
      {questions.map(question => {
        return (
          <Question
            key={question.question.props.children}
            question={question.question}
            answers={question.answers}
            handleAnswerClick={handleAnswerClick}
            handleEnterPress={handleEnterPress}
          />
        );
      })}
    </ul>
  );
}
export default QuestionList;