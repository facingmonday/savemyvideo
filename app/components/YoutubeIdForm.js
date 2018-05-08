import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class YoutubeIdForm extends Component {
    constructor(){
        super();
        this.state = { 
            youtube_id: ""
        }
    }
    onChange(evt){
        this.setState({ 
            youtube_id: evt.currentTarget.value
        });
    }
    onClickSubmit(evt){
        evt.preventDefault();
        axios
            .get("/api/search")
            .then((data)=>{
                console.log('data', data);
            })
            .catch((err)=>{
                console.log('err', err);
            })
        ;
    }
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" onChange={ this.onChange.bind(this)} name="youtube_id" id="youtube_id" placeholder="Enter a youtube url or id" value={this.state.youtube_id} />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-secondary YoutubeIdForm-go-button" onClick={ this.onClickSubmit.bind(this)} value="youtube_id">Go</button>
                </span>
            </div>
        );
    }
}

export default YoutubeIdForm;