import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TokensList from '../components/TokensList';
import * as TokensListActions from '../actions/tokensList';

function mapStateToProps(state) {
  return {
    tokensList: state.tokensList
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TokensListActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokensList);
