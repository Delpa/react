import React,{Component} from 'react';
import List from '../../misc/List';

export default class SelectCinemaSeats extends Component {
	constructor(props){
		super(props);
		this.state={
			fechasDisponible:["January, 21","January, 22","January, 23"],
			horarioDisponible:["14:00","16:10","16:00","17:50","18:00"],
			leyenda:[],
			butacas:[],
			res:{}
			
		};
		this.selecionarFecha= this.selecionarFecha.bind(this);
		this.selecionarHorario= this.selecionarHorario.bind(this);
	}
	selecionarFecha(key){
		console.log(this.state.res);
		this.state.res={};
		this.state.res['holi']='oli';
		console.log(this.state.res);
	}
	selecionarHorario(key){
		this.state.res="sfdsdfsdfsdf";
		console.log(this.state.res);
	}

	selectButacas(){}
	pagar(){}
	render(){
		const {
            fechasDisponible,
			horarioDisponible
        } = this.state;
		return(
			<div>
			<div>
				<List items={fechasDisponible} res={this.selecionarFecha}/>
				<List items={horarioDisponible} res={this.selecionarHorario}/>
				<spam>Available</spam>
				<spam>Taken</spam>
				..List of Steats..
				<span>Total <span>$25.80</span></span>
				<button>Buy Now</button>
				<a href="#">Terms & Conditions</a>
				
			</div>
			<div>
				<select>November, 21</select>
				<select>18:00</select>
				<spam>Available</spam>
				<spam>Taken</spam>
				..List of Steats..
				<span>Total <span>$25.80</span></span>
				<button>Buy Now</button>
				<a href="#">Terms & Conditions</a>
				
			</div>
			</div>
		);
	}
}