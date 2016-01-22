import React, {Component} from 'react';
import _ from 'lodash';

export default class List extends Component{
    render() {
        const {items,res} = this.props;
		
        var mapped_item = (item, i) => (<li key={i} onClick={() => res(i)}>{item}</li>);
 		
        return(<lu>{_.map(items,mapped_item)}</lu>);
    } 
	
}
List.defaultProps = {res:()=>''};