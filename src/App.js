import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import Home from './components/Homepage';
import QuotePage from './components/QuotePage';

class App extends Component{
  constructor (props){
    super(props);
    this.state={
      home: true,
      movie: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://cite-api.herokuapp.com/wakeup')
      .then(res => {
        if (res.data.code === 200) {
          console.log('The backend has been AWOKEN!');
        }
      })
      .catch(er => {
        console.log('Unable to contact Backend :/', er);
      });
  }
  toggleHome =()=> {
    this.setState({
      home: !this.state.home
    })

  }
  selectMovie = (movie) => {
    this.setState({
      movie: movie
    })
    this.toggleHome()
  }
  render(){
    return (
      <div className="App">
        {this.state.home  ? ( 
          <Home selectMovie={this.selectMovie}/>
        ) : (
          <QuotePage movie={this.state.movie} toggleHome={this.toggleHome}/>
        )
        }
      </div>
    );
  }

}

export default App;
