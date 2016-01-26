import React,{Component} from 'react';
import List from '../../misc/List';
import SeatsList from '../../misc/SeatsList';
import Select from '../../misc/Select';

export default (component) => (
	<div>
		<Select items={component.props.fechasDisponible} res={component.selecionarFecha}/>
		<Select items={component.props.horarioDisponible} res={component.selecionarHorario}/>
		<List items={component.props.leyenda}/>
		<SeatsList items={component.props.butacas} res={component.selecionarButacas} selected={component.state.butacasSelecionada} />
		<span>Total <span>${component.state.precioTotal}</span></span>
		<button>Buy Now</button>
		<a href="#">Terms & Conditions</a>
	</div>
);
