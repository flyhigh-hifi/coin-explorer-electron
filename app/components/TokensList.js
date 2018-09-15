// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';

import styles from './TokensList.css';

type Props = {
  getTokenAverageRate: string => void
};

export default class TokensList extends Component<Props> {
  props: Props;

  render() {
    const { getTokenAverageRate } = this.props;

    return (
      <div>
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={styles.btnGroup}>
          <button
            className={styles.btn}
            onClick={() =>
              getTokenAverageRate('0xff71cb760666ab06aa73f34995b42dd4b85ea07b')
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
