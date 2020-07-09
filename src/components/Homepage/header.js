import React , { useState }from 'react';
import {FaReact, FaImdb, FaSearch} from 'react-icons/fa';
import styles from './styles.module.css';

function Header(props) {
    return (
        <div>
            
        <nav className="navbar navbar-light bg-dark mb-5">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand text-white text-lg brand-text" >
                MovieQuotesInfo
              </div>

            </div>
     
            <ul className="navbar-nav ml-auto text-light d-inline-block ">
              <li className="nav-item d-inline-block mr-4">
                <a className="nav-link" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><FaReact color="purple" size="5rem"/></a>
              </li>
              <li className="nav-item d-inline-block mr-4">
              <a className="nav-link" href="https://www.imdb.com/" target="_blank" rel="noopener noreferrer"><FaImdb color="#b2b200" size="5rem"/></a>
              </li>
            </ul>
           

          </div>
        </nav>
        <div className='container' className={styles.headsearchcon}>
            <div className='row'>
                <div className="col d-flex justify-content-center" >
                <FaSearch color='#4e4eff' size='3.5rem' className='align-self-center' /><span>Search</span>
                </div>

            </div>
        </div>
            
        </div>
    );
}

export default Header;
