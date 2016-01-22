import React,{Component} from 'react';
import List from '../../misc/List';
import Select from '../../misc/Select';

export default (component) => (
	<div>
		<List items={component.props.fechasDisponible} res={component.selecionarFecha}/>
		<List items={component.props.horarioDisponible} res={component.selecionarHorario}/>
		<List items={component.props.leyenda}/>
		..List of Steats..
		<span>Total <span>${component.state.precioTotal}</span></span>
		<button>Buy Now</button>
		<a href="#">Terms & Conditions</a>
	</div>
);
