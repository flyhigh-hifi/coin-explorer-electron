// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';
import type { Tokens } from '../reducers/types';

import styles from './TokensList.css';

type Props = {
  getTokenRates: string => void,
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
      getTokenRates,
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
              <div className={styles.tokenHeader}>
                <div>
                  <h4 className={styles.label}>{token.name}</h4>
                  <h2 className={styles.label}>
                    (ethplorer price: {token.price.rate}) {token.rate && token.rate}
                  </h2>
                </div>
                <button
                  className={styles.btn}
                  onClick={() => getTokenRates(token.address)}
                  type="button">
                  Get rate
                </button>
              </div>
              <div>
                {token.rates.external.map(rate => (
                  <div>
                    {rate.source} {rate.value}
                  </div>
                ))}
                {!!token.rates.average && <div>average {token.rates.average}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
