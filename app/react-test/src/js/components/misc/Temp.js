import React, {Component} from 'react';
import styles from './css.css';
import Temp from './Temp';


export default class Select extends Component{
	render(){
		return(
			<div>
				<input type="text" />
				<ul>
					<li className="especial"> item u</li>
					<li className={styles.especial_e}>item d</li>
					<li>item t</li>
					<li>item c</li>
					<Temp estilosheredados={styles.especial_e}/>
				</ul>
			</div>);
	}
}