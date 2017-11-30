import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

// upvote or downvote button with icon passed as child
const VoteButton = ({ children, onClick }) => {
  return (
    // materialize-css requires these to be <a> instead of <button> :-/
    // use of role attr should address accessibility resulting from that
    <a href="#" className="vote-button" role="button" onClick={(e) => {
      e.preventDefault();
      onClick();
    }} >
      {children}
    </a>
  );
};

VoteButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default VoteButton;
