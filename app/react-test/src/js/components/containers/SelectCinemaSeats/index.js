import React from 'react';
import ReactDOM from 'react-dom';
import CinemaSeats from './SelectCinemaSeats';
import CinemaSeats_view from './SelectCinemaSeats_view2';


var fechasDisponible = ["January, 21","January, 22","January, 23"];
var horarioDisponible = ["14:00","16:10","16:00","17:50","18:00"];
var leyenda = ["libre","ocupado","selecionado"];
var butacas = [
				{
					habilitado:true,
					codigo:"a1",
					seleccionado:false,
					x:0,y:0
				},
				{
					habilitado:false,
					codigo:"a2",
					seleccionado:false,
					x:0,y:2
				},
				{
					habilitado:true,
					codigo:"a3",
					seleccionado:false,
					x:0,y:1
				},
				{
					habilitado:true,
					codigo:"b1",
					seleccionado:false,
					x:1,y:0
				},
				{
					habilitado:false,
					codigo:"b2",
					seleccionado:false,
					x:1,y:1
				},
				{
					habilitado:true,
					codigo:"b3",
					seleccionado:false,
					x:1,y:2
				},
				{
					habilitado:true,
					codigo:"b4",
					seleccionado:false,
					x:1,y:3
				},
				{
					habilitado:false,
					codigo:"c1",
					seleccionado:false,
					x:2,y:0
				},
				{
					habilitado:true,
					codigo:"c2",
					seleccionado:false,
					x:2,y:1
				},
			];
var precio = 25;


(function(mount){
	mount();
}(function(){
	ReactDOM.render(<CinemaSeats 	view={CinemaSeats_view} 
									fechasDisponible={fechasDisponible} 
									horarioDisponible={horarioDisponible}
									leyenda={leyenda}
									butacas={butacas}
									precio={precio}/>, document.getElementById('test-mount-point'));
}));