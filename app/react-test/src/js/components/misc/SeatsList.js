import React, {Component} from 'react';
import _ from 'lodash';
import Seats from './Seats';

export default class SeatsList extends Component{
    render() {
        const {items,res} = this.props;
        var mapped_item = (item, i) => (
			<Seats key={i} enable={item.habilitado} code={item.codigo} isSelected={_.includes(this.props.selected,item.codigo)} res={res}/>
		);
 		
        return(<lu>{_.map(items,mapped_item)}</lu>);
    } 
	
}
SeatsList.defaultProps = {res:()=>''};