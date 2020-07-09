import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';


import Search from './search';
import Suggestions from './suggestions';
import Header from './header';
import Footer from './footer';

export default class Home extends Component {

    state={
        query:'',
        suggestions:[]
    }

    inputHandler = event =>{
        let query=event.target.value.toLowerCase();

        this.setState({
            query:query
        })
        
        if (query !== ''){
            fetchJsonp(
                `https://v2.sg.media-imdb.com/suggests/${query[0]}/${query}.json`,
                {
                  jsonpCallbackFunction: `imdb$${query.replace(/ /g, '_')}`
                }
              )
              
            .then(res => { 
                return res.json()  } )
            .then(json => this.parseJSON(json) )
            .catch(err => console.log(err))
        }        
    }
    parseJSON = (json) => {
        let suggestions=[]
        if ('d' in json){
            json.d.forEach(element => {
                if ('y' in element){
                    if('i' in element){
                        suggestions.push({
                            name: element.l,
                            year: element.y,
                            id: element.id,
                            image: element.i
                        })
                    }
                }
            });
        }
        this.setState({
            suggestions: suggestions
        });
            
    }


    render() {
        return (
            <div>
                <Header />
                <Search inputHandler={this.inputHandler}/>
                <Suggestions suggestions={this.state.suggestions}
                             selectMovie={this.props.selectMovie}
                />
                <Footer />
            </div>
        )
    }
}
