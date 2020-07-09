import React from 'react';
import styles from './styles.module.css';

function Search(props) {
    return (
        <div className={styles.search_cont}>
            
            <input
            type="text"
            placeholder="Get Suggestions by Typing . ."
            id="query"
            name='query'
            onChange={props.inputHandler}
            className={styles.search}
            />
        </div>
    )
}

export default Search;
