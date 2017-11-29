import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const VoteButton = ({ children, onClick }) => {
  return (
    // materialize-css requires these to be <a> instead of <button> :-/
    // use of role attr should address accessibility resulting from that
    <a href="#" className="vote-button" role="button" onClick={onClick} >
      {children}
    </a>
  );
};

VoteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default VoteButton;
