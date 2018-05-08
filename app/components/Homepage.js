import React, { Component } from 'react';
import YoutubeIdForm from './YoutubeIdForm';
import YoutubeSearchForm from './YoutubeSearchForm';
import { Jumbotron, Button } from 'reactstrap';
import SearchResults from './SearchResults';

class Homepage extends Component {
    constructor(){
        super();
        this.state = {
            search_term: ""
        }
        this.onSubmitSearchTerm = this.onSubmitSearchTerm.bind(this);
    }
    
    onSubmitSearchTerm(term){
        this.setState({
            search_term: term
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="hidden-xs col-sm-2"></div>
                    <div className="col-xs-12 col-sm-8">
                        <Jumbotron>
                            <h4 className="text-center Homepage-header">A BETTER SHARING EXPERIENCE</h4>
                            <div>
                                <YoutubeIdForm />
                            </div>
                            <h4 className="text-center text-muted">OR</h4>
                            <div>
                                <YoutubeSearchForm search_term={this.state.search_term} onSubmitSearchTerm={this.onSubmitSearchTerm}/>
                            </div>
                        </Jumbotron>
                    </div>
                    <div className="hidden-xs col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="hidden-xs col-sm-1"></div>
                    <div className="col-xs-12 col-sm-10">
                        <SearchResults search_term={this.state.search_term} />
                    </div>
                    <div className="hidden-xs col-sm-1"></div>
                </div>
            </div>
        );
    }
}

export default Homepage;