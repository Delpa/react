import React, {Component} from 'react';

export default class List extends Component{
    
    render() {
        const {
            data
        } = this.props;
        var item = function(data, i){
            return (<li key={i}>{data}</li>);
        };
        return(<lu>{data.map(item)}</lu>
        );
    }
}
