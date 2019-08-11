import React from 'react';
import { Button } from '@vkontakte/vkui';
import './input_answer.css';

class InputAnswer extends React.Component {
	
	render() {
		return (
			<div className="answer-block">
				<div className="answer">
					<h2 className={this.props.statusError && "statusError"}>{this.props.text}</h2>
				</div>
				<Button disabled={this.props.disabled} onClick={this.props.onDelete} >Удалить</Button>
			</div>
		);
	}
}

export default InputAnswer;