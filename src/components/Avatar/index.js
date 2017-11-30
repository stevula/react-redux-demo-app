import React from 'react';
import PropTypes from 'prop-types';

// contributor's profile image
const Avatar = ({ imgSrc, login, profileUrl }) => {
  return (
    <a href={profileUrl} target="_blank">
      <img
        className="circle"
        src={imgSrc}
        alt={`avatar for ${login}`}
      />
    </a>
  );
};

Avatar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
}

export default Avatar;
