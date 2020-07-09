import React, { Component } from 'react';
import styles from './styles.module.css';

export class Error extends Component {
  render() {
    return (
      <div className={styles.error_cnt}>
        <img
          className={styles.error_image}
          src={require('../../images/empty.jpg')}
          alt="Error"
        />
        <div className={styles.error_message}>
          {this.props.message}
          <br />
          Please Try Again.
        </div>
      </div>
    );
  }
}

export default Error;
