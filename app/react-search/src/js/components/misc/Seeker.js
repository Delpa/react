import React, {Component} from 'react';

export default class Seeker extends Component{
    render() {
        const {
            value,
            onChange
        } = this.props;
        return(
            <input type="text" value={value} onChange={onChange}/>
        );
    }
}