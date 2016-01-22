import React, {Component} from 'react';
import _ from 'lodash';

export default class Seats extends Component{
	constructor(props){
		super(props);
		this.state={
			enable: this.props.enable,
			code: this.props.code,
			state: false
		};
		this.toggleState= this.toggleState.bind(this);
		
	}
	toggleState(){
		if(this.state.enable==true){
			if(this.state.state==false){
				this.setState({state: true});
			
			}
			else{
				this.setState({state: false});
			}
		}
	}
    render() {
        const {state,code} = this.state;
		
        return (<li onClick={this.toggleState}>{code} {state}</li>);
    } 

}