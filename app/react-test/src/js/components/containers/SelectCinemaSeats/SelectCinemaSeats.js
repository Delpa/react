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
	selecionarButacas(value,action){
		let temp_butacasSelecionadas=this.state.butacasSelecionada;
		if(action==true){
			temp_butacasSelecionadas=_.concat(temp_butacasSelecionadas,value);
		}else{
			temp_butacasSelecionadas=_.pull(temp_butacasSelecionadas,value);
		}
		
		let cantidad = temp_butacasSelecionadas.length;
		let precio = this.props.precio;
		this.setState({butacasSelecionada:temp_butacasSelecionadas});
		this.setState({precioTotal:(cantidad*precio)});
	}
	render(){
		const {
            view
        } = this.props;
		return (<div>{view(this)}</div>);
	}
}