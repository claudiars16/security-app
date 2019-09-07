
import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const Modal = ({ modal: { state, praise, points } }) => {
  return (
    <div className={'correct-modal' + (state === 'show' ? ' modal-enter' : '')}>
      <div className="praise">{praise}</div>
      <div className="points">{points}</div>
    </div>
  );
};
export default Modal;