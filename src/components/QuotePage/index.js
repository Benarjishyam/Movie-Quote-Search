import React, { Component } from 'react'
import axios from 'axios';

import Header from './header';
import ShowPage from './ShowPage';
import Loading from './Loading';
import Quotes from './Quotes';
import Error from './error';

class QuotePage extends Component {
    state={
        loading: true,
        error: '',
        quotes: [],
        count:[]
    }
    componentDidMount(){
        let id=this.props.movie.id;

        axios
        .get(`https://cite-api.herokuapp.com/movie/${id}`)
        .then(response => {
            let data = response.data;
            if (data.code !== 200){
                this.setState({
                    loading: false,
                    error: "Unable to find the Movie",
                    quotes: []
                })         
            }
            else if (data.code === 200){
                this.setState({
                    loading: false,
                    error : '',
                    quotes : data.quotes,
                    count: data.count
                })
            }
            else{
                this.setState({
                    loading: false,
                    error: "UNnknown error raised"
                })
            }

        })
        .catch(err => {
            this.setState({
                loading: false,
                error: "Unknown error caught"
            })
            console.log(err);
        })

    }
    render() {
        return (
            <div>
                <Header toggleHome={this.props.toggleHome}/>
                <ShowPage movie={this.props.movie} count={this.state.count}/>

                {this.state.loading ? (
                    <Loading />
                    ) : (
                    <div>
                         {this.state.error !== '' ? (
                          <Error message={this.state.error} />
                             ) : (
                            <Quotes quotes={this.state.quotes} />
                 )}
          </div>
        )}
            </div>
        )
    }
}

export default QuotePage
