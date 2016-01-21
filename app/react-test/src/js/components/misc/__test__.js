import React from 'react';
import ReactDOM from 'react-dom';
import Select from './Select';

(function(mount){
	mount();
}(function(){
	ReactDOM.render(<Select/>, document.getElementById('test-mount-point'));
}));