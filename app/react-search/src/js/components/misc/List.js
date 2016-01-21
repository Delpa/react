import React, {Component} from 'react';

export default class List extends Component{
    
    render() {
        const {
            items
        } = this.props;
		
        var mapped_item = (item, i) => (<li key={console.log(i)}>{item}</li>);
 
        return(<lu>{data.map(mapped_item)}</lu>
        );
    }
}
