import React, {Component} from 'react';
import _ from 'lodash';

export default class Seats extends Component{
	constructor(props){
		super(props);
		this.toggleState= this.toggleState.bind(this);
		
	}
	toggleState(){
		if(this.props.enable==true){
			if(this.props.isSelected==false){
				this.props.res(this.props.code,true);
			}
			else{
				this.props.res(this.props.code,false);
			}
		}
	}
    render() {
        const {code,isSelected} = this.props;
		
        return (<li onClick={this.toggleState}>{code} {isSelected.toString()}</li>);
    } 
}
Seats.defaultProps = {res:()=>''};