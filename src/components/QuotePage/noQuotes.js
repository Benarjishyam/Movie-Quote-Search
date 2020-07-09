import React, { Component } from 'react';
import styles from './styles.module.css';

export class NoQuotes extends Component {
  render() {
    return (
      <div className={styles.error_cnt} >

      <div className={styles.error_message}>
        This Movie does not have any quotes on it's IMDb Page
      </div>
    </div>

    );
  }
}

export default NoQuotes;
