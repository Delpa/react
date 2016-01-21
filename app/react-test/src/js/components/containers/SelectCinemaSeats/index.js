import React from 'react';
import ReactDOM from 'react-dom';
import CinemaSeats from './SelectCinemaSeats';

(function(mount){
	mount();
}(function(){
	ReactDOM.render(<CinemaSeats/>, document.getElementById('test-mount-point'));
}));