import React, {Component} from 'react';

export default class Temp extends Component{
	render(){
		const{estilosheredados}=this.props;
		return(
			<div>
				<ul>
					<li className={estilosheredados}> item dfdfu</li>
					<li>item dfdfd</li>
					<li>item dfdfdft</li>
					<li>item dfdc</li>
				</ul>
			</div>);
	}
}