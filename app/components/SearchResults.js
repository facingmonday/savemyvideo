import React, { Component } from 'react';
import axios from 'axios';
import constants from '../../config/constants';

class SearchResults extends Component {
    constructor(){
        super();
        this.state = {
            search_results: [],
            error: ""
        }
    }

    componentDidMount() {
        if(this.props.search_term){
            axios
                .get('/api/search', {params: {
                    search_term: this.props.search_term
                }})
                .then((data)=>{
                    this.setState({
                        search_results: data,
                        error: ""
                    })
                })
                .catch((err)=>{
                    this.setState({
                        search_results: [],
                        error: constants.NO_RESULTS
                    })

                })
            ;
        }
    }
    
    onSubmitSearchTerm(evt){
        evt.preventDefault();
        
        return false;
    }
    render() {
        return (
            <div>
                SearchResults
            </div>
        );
    }
}

export default SearchResults;