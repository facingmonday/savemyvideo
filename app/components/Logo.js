import React, { Component } from 'react';
import logoImage from '../../assets/images/sharemyvideo.png';

class Logo extends Component {
    render() {
        return (
            <div>
                <img width="200" className="img-responsive" src={logoImage} />
            </div>
        );
    }
}

export default Logo;