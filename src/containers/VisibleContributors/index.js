import { connect } from 'react-redux';
import ContributorsList from '../../components/ContributorsList';


const mapStateToProps = (state) => {
  return {
    contributors: state.contributors
      .filter((contributor) => {
        return contributor.login.includes(state.filterSubstring);
      })
      .map((contributor) => {
        if (contributor.votes) return contributor;
        return {
          ...contributor,
          votes: 0
        };
      })
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};


const VisibileContributors = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContributorsList);

export default VisibileContributors
