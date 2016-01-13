import React from 'react';
import ReactDOM from 'react-dom';
import SearchItem from './SearchItem';

    var data = [
        {nombre: 'Gianluca Candiotti'},
        {nombre: 'Carlos Olórtiga'},
        {nombre: 'Junior Claudio'},
        {nombre: 'leila lazo'}
    ];
export default (function (lib){
    lib();
}(function(){
    ReactDOM.render(<SearchItem data ={data}/>,document.getElementById('mount-point'));
}));



//export default ReactDOM.render(<SearchItem/>,document.getElementById('mount-point'));
