import React, {Component} from 'react';
import _ from 'lodash';
import Seeker from '../../misc/Seeker';
import List from '../../misc/List';

export default class SearchItem extends Component{
    constructor(props){
        super(props);
        this.state={
            search_value: "",
            data: this.props.data,
            new_data: [],
            
        };
        this.changeValue= this.changeValue.bind(this);
        this.onChange= this.onChange.bind(this);
        this.search= this.search.bind(this);
    }
    search(text){
        console.log(text);
        const new_data = _.filter(_.map(this.state.data, value => value.nombre), value => _.includes(value,text));console.log(new_data);
        return new_data;
    }
    onChange(e){
        this.setState({search_value: e.target.value,new_data: this.search(e.target.value)});
    }
    changeValue() {
        this.setState({search_value: "" , new_data: []} );
    }
    render() {
        const {
            search_value,
            new_data
        } = this.state;
        return(
            <div>
                <h2>{search_value}</h2>
                <button onClick={this.changeValue}>reset</button>
                <Seeker value={search_value} onChange={this.onChange}/>
                <List data={new_data}/>
                
            </div>
        );
    }
}
