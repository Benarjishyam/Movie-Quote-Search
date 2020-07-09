import React, { Component } from 'react';
import styles from './styles.module.css';


export class Loading extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h1 >Fetching Quotes from IMDB Server</h1>
      </div>
    );
  }
}

export default Loading;
