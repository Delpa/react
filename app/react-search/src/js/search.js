import React from 'react';
import ReactDOM from 'react-dom';

var Input = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}: <input placeholder={this.props.placeholder} />
      </div>
    );
  }
});

var List = React.createClass({
  render: function() {
    var createItem = function(item){
      return <li id={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var Search = React.createClass({
  getInitialState: function() {
    return {items: []};
  },
  render: function() {
    return (
      <div>
        <Input name="Buscador" placeholder="..." />
        <List items={this.state.items} />
      </div>
    );
  }
});


ReactDOM.render(<Search />, document.getElementById('mount-point'));
