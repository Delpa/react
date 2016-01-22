import React, {Component} from 'react';
import _ from 'lodash';

export default class Select extends Component{
    render() {
        const {items,res} = this.props;
		
        var mapped_item = (item, i) => (<option value={i} key={i} >{item}</option>);
 	
        return(<select onChange={(e) => res(e.target.value)} >{_.map(items,mapped_item)}</select>);
    } 
}
Select.defaultProps = {res:()=>''};