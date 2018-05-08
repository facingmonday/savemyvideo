import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import SearchResults from './SearchResults';

class YoutubeSearchForm extends Component {
    constructor(){
        super();
        this.state = { 
            search_term: ""
        }
        //onSubmitSearchTerm
    }

    onChange(evt){
        this.setState({ 
            search_term: evt.currentTarget.value
        });
    }

    onClickSubmit(evt){
        evt.preventDefault();
        
        this.props.onSubmitSearchTerm(this.state.search_term);
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" onChange={ this.onChange.bind(this)} name="youtube_search" id="youtube_search" placeholder="Search Youtube for a video" value={this.state.search_term} />
                    <span className="input-group-btn">
                        <button type="button" className="btn btn-secondary YoutubeSearchForm-search-button" onClick={ this.onClickSubmit.bind(this)} value="Search">Search</button>
                    </span>
                </div>
            </div>
        );
    }
}

export default YoutubeSearchForm;