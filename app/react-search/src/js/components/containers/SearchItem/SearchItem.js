import React, {Component} from 'react';
import Seeker from '../../misc/Seeker';

export default class SearchItem extends Component{   

     constructor(props){
        super(props);
        this.state={
            search_value: ""          
        };
        this.changeValue= this.changeValue.bind(this);
        this.onChange= this.onChange.bind(this);
    }
    onChange(e){
        this.setState({search_value: e.target.value});
    }
    changeValue() {
        this.setState({search_value: ""});
    }
    render() {
        const {
            search_value
        } = this.state;
        return(
            <div>
                <h2>{search_value}</h2>
                <button onClick={this.changeValue}>reset</button>
                <Seeker value={search_value} onChange={this.onChange}/>
            </div>
        );
    }
}
