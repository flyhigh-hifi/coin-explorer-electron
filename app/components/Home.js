// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import routes from '../constants/routes.json';

import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container}>
        <h2>Token info</h2>
        <Link to={routes.TOKENS_LIST}>link to the Tokens List</Link>
      </div>
    );
  }
}
