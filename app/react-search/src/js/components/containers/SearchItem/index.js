import React from 'react';
import ReactDOM from 'react-dom';
import SearchItem from './SearchItem';


export default (function (lib){
    lib();
}(function(){
    ReactDOM.render(<SearchItem/>,document.getElementById('mount-point'));
}));



//export default ReactDOM.render(<SearchItem/>,document.getElementById('mount-point'));