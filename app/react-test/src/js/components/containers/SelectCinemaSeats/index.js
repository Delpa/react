import React from 'react';
import ReactDOM from 'react-dom';
import CinemaSeats from './SelectCinemaSeats';
import CinemaSeats_view from './SelectCinemaSeats_view2';


var fechasDisponible = ["January, 21","January, 22","January, 23"];
var horarioDisponible = ["14:00","16:10","16:00","17:50","18:00"];
var leyenda = ["libre","ocupado","selecionado"];
var butacas = [
				{
					estado:"libre",
					codigo:"a1"
				},
				{
					estado:"libre",
					codigo:"a2"
				},
				{
					estado:"libre",
					codigo:"b1"
				}
			];
var precios = 25;


(function(mount){
	mount();
}(function(){
	console.log(fechasDisponible);
	ReactDOM.render(<CinemaSeats 	view={CinemaSeats_view} 
									fechasDisponible={fechasDisponible} 
									horarioDisponible={horarioDisponible}
									leyenda={leyenda}
									butacas={butacas}
									precios={precios}/>, document.getElementById('test-mount-point'));
}));