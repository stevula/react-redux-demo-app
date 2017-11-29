import { connect } from 'react-redux';
import { upvote, downvote } from '../../actions';
import ContributorsList from '../../components/ContributorsList';


const mapStateToProps = (state) => {
  return {
    contributors: state.contributors.filter((contributor) => {
      return contributor.login.startsWith(state.filterStartsWith);
    })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickDownvote: (id) => dispatch(downvote(id)),
    onClickUpvote: (id) => dispatch(upvote(id)),
  };
};


const VisibileContributors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributorsList);

export default VisibileContributors
