import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const UserInfo = ({ image, login, profile, votes}) => {
  return (
    <div>
      <Avatar imgSrc={image} login={login} profileUrl={profile} />

      {/* username */}
      <a className="title" href={profile} target="_blank">{login}</a>

      {/* vote count */}
      <p>Score: {votes}</p>
    </div>
  );
};

UserInfo.propTypes = {
  image: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default UserInfo;
