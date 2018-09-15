// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';
import type { Tokens } from '../reducers/types';

import styles from './TokensList.css';

type Props = {
  getTokenAverageRate: string => void,
  getTokens: () => void,
  tokens: Tokens
};

export default class TokensList extends Component<Props> {
  props: Props;

  componentDidMount() {
    const { getTokens } = this.props;

    getTokens();
  }

  render() {
    const { getTokenAverageRate, tokens } = this.props;

    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        {tokens.valueSeq().map(token => (
          <span>{`${token.name} ${token.rate}`}</span>
        ))}
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={() =>
              getTokenAverageRate('0x8dd5fbce2f6a956c3022ba3663759011dd51e73e')
            }
            data-tclass="btn"
            type="button">
            odd
          </button>
        </div>
      </div>
    );
  }
}
