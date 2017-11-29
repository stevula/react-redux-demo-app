import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const VoteButton = ({ children, onClick, value }) => {
  return (
    <a href="#" className="vote-button" role="button" onClick={onClick} >
      {children}
    </a>
  );
};

VoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default VoteButton;
