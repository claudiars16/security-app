import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers);
  const oneTry = triesTotal[1] && <div><strong>{triesTotal[1]}</strong> en el primer intento.</div>;
  const twoTries = triesTotal[2] && <div><strong>{triesTotal[2]}</strong> en el segundo intento.</div>;
  const threeTries = triesTotal[3] && <div><strong>{triesTotal[3]}</strong>en el tercer intento.</div>;
  const fourTries = triesTotal[4] && <div><strong>{triesTotal[4]}</strong> en el cuarto intento.</div>;
  
  return (
    <div className="results-container">
      <h2>Resultados</h2>
      <div>Tu respondiste...</div>
      {oneTry}
      {twoTries}
      {threeTries}
      {fourTries}
      <div className="results-total">Tu puntaje total es <strong>{score}</strong>.</div>
      <a onClick={restartQuiz}>Volver a jugar</a>
    </div>
  );
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired
};

export default Results;