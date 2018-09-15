// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';
import type { Tokens } from '../reducers/types';

import styles from './TokensList.css';

type Props = {
  getTokenAverageRate: string => void,
  getTokens: () => void,
  tokens: Tokens,
  tokenAverageLoading: boolean,
  tokenAverageError: boolean,
  tokensLoading: boolean
};

export default class TokensList extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { getTokens } = this.props;

    getTokens();
  }

  render() {
    const {
      getTokenAverageRate,
      tokens,
      tokenAverageLoading,
      tokenAverageError,
      tokensLoading
    } = this.props;

    if (tokensLoading) {
      return <h1>Loading tokens...</h1>;
    }

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.backButton}>
            <Link to={routes.HOME}>
              <i className="fa fa-arrow-left fa-2x" />
            </Link>
          </div>
          {tokenAverageLoading && <h3 className={styles.loadingStatus}>Loading..</h3>}
          {tokenAverageError && <h3 className={styles.error}>Error!</h3>}
        </div>
        <div className={styles.tokenList}>
          {tokens.valueSeq().map(token => (
            <div className={styles.token}>
              <h4 className={styles.label}>
                {token.name} {token.rate && token.rate}
              </h4>
              <button
                className={styles.btn}
                onClick={() => getTokenAverageRate(token.address)}
                type="button">
                Get rate
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
