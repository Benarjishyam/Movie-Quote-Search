import React from 'react'
import styles from './styles.module.css';

function Header(props) {
    return (
        <div className="container">
            <div className={styles.headcont}>
                <div className="row justify-content-center" onClick={props.toggleHome}>
                Search Again
                </div>

            </div>
            
        </div>
    )
}

export default Header;