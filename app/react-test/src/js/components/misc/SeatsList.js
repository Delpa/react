import React, {Component} from 'react';
import _ from 'lodash';
import Seats from './Seats';

export default class SeatsList extends Component{
    render() {
        const {items,res} = this.props;
		
        var mapped_item = (item, i) => (
			<Seats key={i} enable={(item.estado=="libre")} code={item.codigo}/>
		);
 		
        return(<lu>{_.map(items,mapped_item)}</lu>);
    } 
	
}
SeatsList.defaultProps = {res:()=>''};