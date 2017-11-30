import { connect } from 'react-redux';
import { upvote, downvote } from '../../actions';
import ContributorsList from '../../components/ContributorsList';

const mapStateToProps = (state) => {
  return {
    contributors: state.contributors
      .filter((contributor) => {
        return contributor.login.startsWith(state.filterStartsWith);
      })
      .sort((a, b) => b.votes - a.votes)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDownvote: (id) => dispatch(downvote(id)),
    onClickUpvote: (id) => dispatch(upvote(id)),
  };
};

// the contributors list filtered by search input and sorted by votes
const VisibleContributors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributorsList);

export default VisibleContributors
