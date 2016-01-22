import React,{Component} from 'react';
import List from '../../misc/List';

export default class SelectCinemaSeats extends Component {
	constructor(props){
		super(props);
		this.state={
			fechaSelecionada:0,
			horarioSelecionada:0,
			butacasSelecionada:[],
			precioTotal:0
		};
		this.selecionarFecha= this.selecionarFecha.bind(this);
		this.selecionarHorario= this.selecionarHorario.bind(this);
		this.selecionarButacas= this.selecionarButacas.bind(this);
	}
	selecionarFecha(key){
		this.setState({fechaSelecionada:key});
	}
	selecionarHorario(key){
		this.setState({horarioSelecionada:key});
	}
	selecionarButacas(Array){
		this.setState({butacasSelecionada:Array});
		let cantidad = this.state.butacasSelecionada.length;
		let precio = this.props.precio;
		this.setState({precioTotal:(cantidad*precio)});
	}
	render(){
		const {
            view
        } = this.props;
		return (<div>{view(this)}</div>);
	}
}