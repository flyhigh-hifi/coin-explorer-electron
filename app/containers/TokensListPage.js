import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TokensList from '../components/TokensList';
import * as TokensListActions from '../actions/tokensList';
import * as FilterActions from '../actions/filter';

const filterTokens = (tokens, filter) =>
  tokens.filter(
    token =>
      token.name.toLowerCase().indexOf(filter) !== -1 ||
      token.address.indexOf(filter) !== -1
  );

function mapStateToProps(state) {
  return {
    tokens: filterTokens(state.tokensList.tokens, state.filter.filterValue),
    tokenAverageLoading: state.tokensList.tokenAverageLoading,
    tokenAverageError: state.tokensList.tokenAverageError,
    tokensLoading: state.tokensList.tokensLoading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...TokensListActions, ...FilterActions }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TokensList);
